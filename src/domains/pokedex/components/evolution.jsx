import * as React from "react";
import { usePokemonEvolution } from "../hooks/use-pokedex";
import { PokemonImage } from "./pokemon-image";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export const Evolution = ({ chainUrl }) => {
    const { data, isLoading } = usePokemonEvolution(chainUrl)

    // Assuming max number of evolutions is 3
    return (
        <>
            {!isLoading && (
                <tr className="flex items-center">
                    <td className="py-3 px-6 text-left w-48">
                        <Link to={`/pokemon/${data.chain.species.name}`} className="flex flex-col items-center">
                            <PokemonImage pokemonName={data.chain.species.name} />
                            <span className="uppercase mt-2 tracking-wide  hover:scale-110">{data.chain.species.name}</span>
                        </Link>
                    </td>
                    {data.chain.evolves_to.length !== 0 && (
                        <>
                            <td className="py-3 px-6 text-left">
                                <ArrowRightIcon className="w-10 h-10 mb-5" />
                            </td>
                            <td className="py-3 px-6 text-left w-48">
                                <Link to={`/pokemon/${data.chain.evolves_to[0].species.name}`} className="flex flex-col items-center">
                                    <PokemonImage pokemonName={data.chain.evolves_to[0].species.name} />
                                    <span className="uppercase mt-2 tracking-wide">{data.chain.evolves_to[0].species.name}</span>
                                </Link>
                            </td>
                            {data.chain.evolves_to[0].evolves_to.length !== 0 && (
                                <>
                                    <td className="py-3 px-6 text-left">
                                        <ArrowRightIcon className="w-10 h-10 mb-5" />
                                    </td>
                                    <td className="py-3 px-6 text-left w-48">
                                        <Link to={`/pokemon/${data.chain.evolves_to[0].evolves_to[0].species.name}`} className="flex flex-col items-center">
                                            <PokemonImage pokemonName={data.chain.evolves_to[0].evolves_to[0].species.name} />
                                            <span className="uppercase mt-2 tracking-wide">{data.chain.evolves_to[0].evolves_to[0].species.name}</span>
                                        </Link>
                                    </td>
                                </>
                            )}
                        </>
                    )
                    }
                </tr>
            )}
        </>
    );
};

