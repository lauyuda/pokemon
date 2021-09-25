import * as React from "react";

export const TypeCard = ({ types, isSeeThrough = false, children }) => {
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

    const toColour = {
        normal: "to-gray-400",
        poison: "to-purple-900",
        grass: "to-green-500",
        fire: "to-red-400",
        water: "to-blue-600",
        bug: "to-green-300",
        flying: "to-purple-400",
        steel: "to-gray-500",
        dragon: "to-purple-600",
        ice: "to-blue-300",
        fighting: "to-yellow-900",
        rock: "to-yellow-800",
        ground: "to-yellow-600",
        dark: "to-gray-900",
        ghost: "to-indigo-900",
        psychic: "to-pink-500",
        electric: "to-yellow-400",
        fairy: "to-pink-300",
    };

    const cardFromColour = fromColour[types[0].type.name];

    const cardToColour = types.length === 1 ? toColour[types[0].type.name] : toColour[types[1].type.name];

    return (
        <div className="relative w-full my-1">
            <div className={`absolute inset-0 w-full rounded-lg bg-gradient-to-b ${cardFromColour} ${cardToColour} ${isSeeThrough && "opacity-50"}`}></div>
            <div className={"relative"}>
                {children}
            </div>
        </div>
    );
};

