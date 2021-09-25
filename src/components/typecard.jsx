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

    const cardFromColour = typeColour[types[0].type.name];

    const cardToColour = types.length === 1 ? typeColour[types[0].type.name] : typeColour[types[1].type.name]

    return (
        <div className="relative w-full my-1">
            <div className={`absolute inset-0 w-full rounded-lg bg-gradient-to-b from-${cardFromColour} to-${cardToColour} ${isSeeThrough && "opacity-50"}`}></div>
            <div className={"relative"}>
                {children}
            </div>
        </div>
    );
};

