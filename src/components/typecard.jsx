import * as React from "react";

export const TypeCard = ({ types, isSeeThrough = false, children }) => {
    const typeColour = {
        normal: "gray-400",
        poison: "purple-900",
        grass: "green-500",
        fire: "red-400",
        water: "blue-600",
        bug: "green-300",
        flying: "purple-400",
        steel: "gray-500",
        dragon: "purple-600",
        ice: "blue-300",
        fighting: "yellow-900",
        rock: "yellow-800",
        ground: "yellow-600",
        dark: "gray-900",
        ghost: "indigo-900",
        psychic: "pink-500",
        electric: "yellow-400",
        fairy: "pink-300",
    };
    const fromColour = {
        normal: "from-gray-400",
        poison: "from-purple-900",
        grass: "from-green-500",
        fire: "from-red-400",
        water: "from-blue-600",
        bug: "from-green-300",
        flying: "from-purple-400",
        steel: "from-gray-500",
        dragon: "from-purple-600",
        ice: "from-blue-300",
        fighting: "from-yellow-900",
        rock: "from-yellow-800",
        ground: "from-yellow-600",
        dark: "from-gray-900",
        ghost: "from-indigo-900",
        psychic: "from-pink-500",
        electric: "from-yellow-400",
        fairy: "from-pink-300",
    };

    const cardFromColour = fromColour[types[0].type.name];

    const cardToColour = types.length === 1 ? typeColour[types[0].type.name] : typeColour[types[1].type.name];

    return (
        <div className="relative w-full my-1">
            <div className={`absolute inset-0 w-full rounded-lg bg-gradient-to-b ${cardFromColour} to-${cardToColour} ${isSeeThrough && "opacity-50"}`}></div>
            <div className={"relative"}>
                {children}
            </div>
        </div>
    );
};

