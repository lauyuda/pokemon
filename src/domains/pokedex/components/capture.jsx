import { useState, useEffect } from "react";
import pokeball from "images/pokeball.png"
import { usePokemonCounterUpdateContext } from "../hooks/use-pokemon-counter";

export const Capture = ({ pokemonName }) => {
    const data = JSON.parse(localStorage.getItem("captured")) ? JSON.parse(localStorage.getItem("captured")) : [];

    // check if the current pokemon is in data of captured pokemons
    const previouslyCaptured = !data ? false : data.includes(pokemonName);

    // set state for captured pokemons for more responsive UIUX
    const [capture, setCapture] = useState(previouslyCaptured);
    useEffect(() => {
        setCapture(previouslyCaptured)
    }, [previouslyCaptured])

    const updatePokemonCounter = usePokemonCounterUpdateContext();

    function capturePokemon() {
        localStorage.setItem("captured", JSON.stringify([...data, pokemonName]));
        setCapture(true);
        updatePokemonCounter("increase");
    };
    
    // DEPRECATED with removal of releasePokemon()
    // const [capture, setCapture] = React.useState(false || previouslyCaptured);

    // ALERT: releasePokemon() deprecated. Can only release Pokemon inside the Pokebox now.
    // function releasePokemon() {
    //     let newData = JSON.parse(localStorage.getItem("captured"));
    //     const releaseIndex = newData.indexOf(pokemonName)
    //     newData.splice(releaseIndex, 1)
    //     localStorage.setItem("captured", JSON.stringify(newData));
    //     setCapture(false);
    //     updatePokemonCounter("decrease");
    // };

    return (
        <div className="relative hover:cursor-pointer" onClick={() => { !capture && capturePokemon(); }}>
            <div className={`text-gray-400 w-10 h-10 ${(capture) ? "opacity-100" : "opacity-50"}`}>
                <img src={pokeball} alt="pokeball" />
            </div>
            {capture && <div className="absolute top-4 left-4 bg-yellow-600 animate-pulse w-2 h-2 rounded-full" />}
        </div>
    );
};