import * as React from "react";

export const TypeImage = ({ types, children }) => {
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

    // // Assuming 2 types max for each pokemon
    const cardToColour = types.length === 1 ? typeColour[types[0].type.name] : typeColour[types[1].type.name];

    return (
        <div className={`w-full p-2 rounded-full bg-gradient-to-b transform hover:scale-110 transition duration-300 from-${cardFromColour} to-${cardToColour}`}>
            {children}
        </div>
    );
};

