import * as React from "react";
import { usePokemon } from "../hooks/use-pokedex";
import { Card } from "components/card"
import { LoadingCard } from "components/loading-card";

export const PokemonCard = ({ pokemonName }) => {
    const { data, isLoading } = usePokemon(pokemonName)

    return (
        <div className="relative flex flex-col">
            {!isLoading ? (
                <Card
                    key={data.species.name}
                    imageUrl={data.sprites.other["official-artwork"].front_default}
                    name={data.species.name}
                    hp={data.stats['0'].base_stat}
                    atk={data.stats['1'].base_stat}
                    def={data.stats['2'].base_stat}
                    spatk={data.stats['3'].base_stat}
                    spdef={data.stats['4'].base_stat}
                    spd={data.stats['5'].base_stat}
                    types={data.types}
                />
            )
                :
                (<LoadingCard key={new Date().getTime()} />)
            }
        </div>
    );
};