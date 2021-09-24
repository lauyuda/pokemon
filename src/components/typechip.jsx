import * as React from "react";

export const TypeChip = ({ type }) => {
    const types = {
        normal: "bg-gray-400 text-gray-100",
        poison: "bg-purple-900 text-pink-100",
        grass: "bg-green-500 text-green-100",
        fire: "bg-red-400 text-red-100",
        water: "bg-blue-600 text-blue-100",
        bug: "bg-green-300 text-green-100",
        flying: "bg-purple-400 text-purple-100",
        steel: "bg-gray-500 text-gray-100",
        dragon: "bg-purple-600 text-purple-100",
        ice: "bg-blue-300 text-blue-100",
        fighting: "bg-yellow-900 text-yellow-100",
        rock: "bg-yellow-800 text-yellow-100",
        ground: "bg-yellow-600 text-yellow-100",
        dark: "bg-gray-900 text-gray-100",
        ghost: "bg-indigo-900 text-indigo-100",
        psychic: "bg-pink-500 text-pink-100",
        electric: "bg-yellow-400 text-yellow-100",
        fairy: "bg-pink-300 text-pink-100",
    };
    const chipColor = types[type];

    return (
        <span className={`py-1 px-2 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 uppercase tracking-widest ${chipColor}`}>
            {type}
        </span>
    );
};

