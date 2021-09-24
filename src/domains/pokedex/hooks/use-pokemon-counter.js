import React, { useContext, useState } from 'react'

const PokemonCounterContext = React.createContext()
const PokemonCounterUpdateContext = React.createContext()

export function usePokemonCounterContext() {
    return useContext(PokemonCounterContext)
}

export function usePokemonCounterUpdateContext() {
    return useContext(PokemonCounterUpdateContext)
}

export function PokemonCounterProvider({ children }) {
    const [counter, setCounter] = useState(0)

    function modifyCounter(action) {
        switch (action) {
            case "increase":
                setCounter(counter + 1)
                break;

            case "decrease":
                setCounter(counter - 1)
                break;

            case "reset":
                setCounter(0)
                break;

            default:
                throw new Error(`Unsupported event type ${action} in modifyCounter`);
        }

    }

    return (
        <PokemonCounterContext.Provider value={counter}>
            <PokemonCounterUpdateContext.Provider value={modifyCounter}>
                {children}
            </PokemonCounterUpdateContext.Provider>
        </PokemonCounterContext.Provider>
    )
}