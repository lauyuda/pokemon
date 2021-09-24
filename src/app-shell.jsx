import { Link } from "react-router-dom";
import { SearchPokemon } from "domains/pokedex/components/search-pokemon";
import pokemonLogo from "images/pokemon.png"
import { usePokemonCounterContext } from "domains/pokedex/hooks/use-pokemon-counter";

export const AppShell = ({ children }) => {
  const pokemonCounter = usePokemonCounterContext()
  
  return (
    <>
      <header className="md:sticky md:top-0 bg-white md:z-10">
        <div className="px-4">
          <div className="flex justify-between items-center py-2 max-w-7xl mx-auto border-b border-gray-200">
            <nav className="flex items-center">
              <Link
                to="/"
                className="text-xl inline-block mr-4 font-bold text-pink-700 hover:text-pink-900"
              >
                <img src={pokemonLogo} alt="pokemonLogo" className="h-6" />
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  to="/pokedex"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Pokedex
                </Link>
                <Link
                  to="/pokedexV2"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  PokedexV2 (POC)
                </Link>
                <Link
                  to="/pokebox"
                  className="flex text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  PokeBox
                  {pokemonCounter > 0 &&
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-500 text-xs flex justify-center items-center">{pokemonCounter}</span>
                    </span>
                  }
                </Link>
              </div>
            </nav>
            <SearchPokemon />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};
