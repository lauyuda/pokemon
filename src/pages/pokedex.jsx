import { usePokedex, PokemonCard } from "domains/pokedex";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { LoadingCard } from "components/loading-card";

export const PokedexPage = () => {
  const { data: pokedex, isLoading, setPage } = usePokedex();

  return (
    <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="fixed left-20 top-1/3">
        <button disabled={!isLoading && !pokedex.previous} onClick={() => setPage(pokedex.previous)}>
          <ChevronLeftIcon className={`w-24 h-48 ${(!isLoading && !pokedex.previous) ? "text-gray-200" : "text-gray-600 hover:text-gray-900"}`} />
        </button>
      </div>
      <div className="fixed right-20 top-1/3">
        <button disabled={!isLoading && !pokedex.next} onClick={() => setPage(pokedex.next)}>
          <ChevronRightIcon className={`w-24 h-48 ${(!isLoading && !pokedex.next) ? "text-gray-200" : "text-gray-600 hover:text-gray-900"}`} />
        </button>
      </div>
      <div className="flex justify-center items-center space-x-2 mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
          Pokedex
        </h1>
      </div>
      {pokedex && (
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
          {isLoading ?
            (<div>
              <LoadingCard />
            </div>)
            :
            (pokedex.results.map((item) => (
              <PokemonCard key={item.name} pokemonName={item.name} />
            ))
            )
          }
        </div>
      )}
      {isLoading &&
        <div className="grid grid-cols-3 gap-10">
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </div>}
    </div>
  );
};
