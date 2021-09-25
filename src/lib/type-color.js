const colour = {
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

export function getTypeColour(type) {
    return colour[type]
}

const borderColour = {
    normal: "border-gray-400",
    poison: "border-purple-900",
    grass: "border-green-500",
    fire: "border-red-400",
    water: "border-blue-600",
    bug: "border-green-300",
    flying: "border-purple-400",
    steel: "border-gray-500",
    dragon: "border-purple-600",
    ice: "border-blue-300",
    fighting: "border-yellow-900",
    rock: "border-yellow-800",
    ground: "border-yellow-600",
    dark: "border-gray-900",
    ghost: "border-indigo-900",
    psychic: "border-pink-500",
    electric: "border-yellow-400",
    fairy: "border-pink-300",
};

export function getBorderColour(type) {
    return borderColour[type]
}