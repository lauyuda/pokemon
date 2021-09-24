import React, { useState } from "react";
import { XCircleIcon, SearchIcon } from "@heroicons/react/outline";
import { useAllPokemon } from "../hooks/use-pokedex";
import { Link } from "react-router-dom";

export const SearchPokemon = () => {
    const { data } = useAllPokemon()
    const [filteredData, setFilteredData] = useState([]);
    const [pokemon, setPokemon] = useState("");

    const handleFilter = (event) => {
        const searchPokemon = event.target.value;
        setPokemon(searchPokemon);

        // filters out pokemon as long as the part of the name contains the search text
        const newFilter = data.results.filter((value) => {
            return value.name.toLowerCase().includes(searchPokemon.toLowerCase());
        });

        if (searchPokemon === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
        // during rendering, filteredData will be spliced and show the first 5 names
        // else will show "no pokemon found"
    };

    const clearInput = () => {
        setFilteredData([]);
        setPokemon("");
    };

    return (
        <div className="relative">
            <div className="flex items-center justify-center bg-white rounded-lg border-2 overflow-hidden">
                <input
                    className="block rounded-lg border-0 focus:ring-0 flex-grow p-2"
                    type="text"
                    placeholder="Seach Pokemon"
                    value={pokemon}
                    onChange={handleFilter}
                />
                <div className="searchIcon">
                    {pokemon.length === 0 ? (
                        <SearchIcon className="h-6 w-6 my-auto m-2 text-gray-500" />
                    ) : (
                        <XCircleIcon id="clearBtn" onClick={clearInput} className="h-6 w-6 my-auto m-2 text-red-600" />
                    )}
                </div>
            </div>

            {filteredData.length !== 0 && (
                <div className="absolute mt-4 w-full flex flex-col text-gray-600 border-2 border-gray-200 rounded-lg bg-white">
                    {filteredData.slice(0, 5).map((value, key) => {
                        return (
                            <Link key={key} className="hover:bg-gray-200 hover:text-gray-800 px-2 capitalize py-0.5" to={`/pokemon/${value.name}`} onClick={clearInput} >
                                <span>{value.name}</span>
                            </Link>
                        );
                    })}
                </div>
            )}

            {filteredData.length === 0 && pokemon && (
                <div className="absolute mt-4 w-full flex flex-col text-gray-600 border-2 border-gray-200 rounded-lg bg-white">
                    <span className="px-2 py-0.5 text-gray-500">No Pokemon found</span>
                </div>
            )}
        </div>
    );
};