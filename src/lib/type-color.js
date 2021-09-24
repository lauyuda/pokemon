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

export function typeColour(type) {
    return colour[type]
}