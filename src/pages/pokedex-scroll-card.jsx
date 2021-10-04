import * as React from "react";
import { Link } from "react-router-dom";
import { usePokedex, usePokemon, PokemonCard } from "domains/pokedex";
import { LoadingCard } from "components/loading-card";
import { TypeChip } from "components/typechip";
import { TypeImage } from "components/typeimage";
import { StatsTable } from "components/stats-table";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

export const PokedexScrollCardPage = () => {
  const { data: pokedex, isLoading, setPage } = usePokedex();
  const [name, setName] = React.useState("")
  const { data: pokemon, isLoading: loadingPokemon } = usePokemon(name);

  return (
    <div className="flex flex-col pt-4 px-4">
      <div className="flex justify-center items-center pt-4 space-x-10 w-full">
        {!name &&
          <div className="mt-24 text-gray-800 space-y-16">
            <h2 className="flex flex-col text-7xl font-extrabold">Same code
              <span className=" text-yellow-500">Different UX</span>
            </h2>
            <h2 className="text-5xl font-bold animate-pulse">Scroll over the cards to get started.</h2>
          </div>
        }

        {!loadingPokemon && name &&
          <>
            <div className="flex flex-col items-center w-2/12 space-y-4">
              <Link className="flex flex-col items-center space-y-4" to={`/pokemon/${name}`}>
                <TypeImage types={pokemon.types}>
                  <img src={pokemon.sprites.other["official-artwork"].front_default} className="p-12" alt="" />
                </TypeImage>
              </Link>
              <h2 className="mt-4 text-5xl font-extrabold text-gray-900 sm:text-center capitalize">
                {name}
              </h2>
              <div className="flex gap-2">
                {pokemon.types.map((type) => (
                  <TypeChip key={type.type.name} type={type.type.name} />
                )
                )}
              </div>
            </div>
            <div className="w-6/12">
              <StatsTable
                hp={pokemon.stats[0].base_stat}
                atk={pokemon.stats[1].base_stat}
                def={pokemon.stats[2].base_stat}
                spatk={pokemon.stats[3].base_stat}
                spdef={pokemon.stats[4].base_stat}
                spd={pokemon.stats[5].base_stat}
              />
            </div>
          </>
        }
      </div>

      <div classname="relative w-full">
        <div className="h-1/2">
          {isLoading ?
            <div className="fixed bottom-10 left-28 -space-x-64 px-10">
              <LoadingCard key={new Date().getTime()} />
            </div>
            :
            <div className="flex fixed bottom-0 transform translate-y-28 -space-x-64 px-10">
              {(pokedex.results.map((item) => (
                <div key={item.name} className="transform scale-50 transition hover:-translate-y-32 duration-500" onMouseOver={() => setName(item.name)}>
                  <PokemonCard key={item.name} pokemonName={item.name} />
                </div>
              ))
              )}
            </div>
          }
        </div>
        <button className="absolute bottom-28 left-5" disabled={!isLoading && !pokedex.previous} onClick={() => setPage(pokedex.previous)}>
          <ChevronLeftIcon className={`w-24 h-24 ${(!isLoading && !pokedex.previous) ? "text-gray-200" : "text-gray-600 hover:text-gray-900"}`} />
        </button>
        <button className="absolute bottom-28 right-5" disabled={!isLoading && !pokedex.next} onClick={() => setPage(pokedex.next)}>
          <ChevronRightIcon className={`w-24 h-24 ${(!isLoading && !pokedex.next) ? "text-gray-200" : "text-gray-600 hover:text-gray-900"}`} />
        </button>
      </div>
    </div>
  );
};
