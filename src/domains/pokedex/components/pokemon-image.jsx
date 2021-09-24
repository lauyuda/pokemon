import * as React from "react";
import { usePokemon } from "../hooks/use-pokedex";
import { TypeImage } from "components/typeimage";

export const PokemonImage = ({ pokemonName }) => {
    const { data, isLoading } = usePokemon(pokemonName);

    return (
        <>
            {!isLoading && (
                <TypeImage types={data.types}>
                    <img src={data.sprites.other["official-artwork"].front_default} className="p-4" alt="" />
                </TypeImage>
            )}
        </>
    );
};

