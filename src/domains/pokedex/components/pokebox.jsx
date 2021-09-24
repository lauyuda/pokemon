import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";
import { PokeboxGrid } from "./pokebox-grid";
import * as React from "react";
import { usePokemonCounterUpdateContext } from "../hooks/use-pokemon-counter";

export const Pokebox = () => {
  let capturedPokemons = JSON.parse(localStorage.getItem("captured")) ? JSON.parse(localStorage.getItem("captured")) : [];
  const [page, setPage] = React.useState(1);
  const [pokemons, setPokemons] = React.useState([...capturedPokemons]);

  // calculates modifiable variables required for pokebox UI
  let numOfPokemons = capturedPokemons.length;
  let maxPages = Math.ceil(numOfPokemons / 9);
  let freeGrids = (numOfPokemons % 9) === 0 ? 0 : 9 - (numOfPokemons % 9);

  // reset counter to 0 after page load
  const updatePokemonCounter = usePokemonCounterUpdateContext();
  React.useEffect(() => {
    updatePokemonCounter("reset");
  }, [updatePokemonCounter])

  const handleReleasePokemon = (releasedPokemon) => {
    // releases the pokemon
    setPokemons(pokemons.filter(pokemon => pokemon !== releasedPokemon));
    const releaseIndex = capturedPokemons.indexOf(releasedPokemon)
    capturedPokemons.splice(releaseIndex, 1)
    localStorage.setItem("captured", JSON.stringify(capturedPokemons));

    // update variables for UI after releasing
    numOfPokemons = capturedPokemons.length
    maxPages = Math.ceil(numOfPokemons / 9)
    freeGrids = 9 - (numOfPokemons % 9);
    page > maxPages && setPage(maxPages)
  };

  return (
    <div className="flex justify-center w-full mt-10">
      <div className="flex flex-col">
        <div className="flex space-x-4 text-gray-800 ">
          <ArrowLeftIcon
            className={`w-12 h-12 bg-wallpaper rounded-full p-2 ${page === 1 ? "opacity-50" : "opacity-100 hover:cursor-pointer"}`}
            onClick={() => { page > 1 && setPage(page - 1) }}
          />
          <div className="flex flex-col flex-grow justify-center items-center rounded-full bg-wallpaper font-bold text-xl uppercase tracking-wider" >
            Pokebox {page}
          </div>
          <ArrowRightIcon
            className={`w-12 h-12 bg-wallpaper rounded-full p-2 ${page === maxPages ? "opacity-50" : "opacity-100 hover:cursor-pointer"}`}
            onClick={() => { page < maxPages && setPage(page + 1) }}

          />
        </div>
        <div className="mt-2 grid grid-cols-3 grid-rows-3 border bg-wallpaper rounded-lg">
          {capturedPokemons.slice(0 + (9 * (page - 1)), 9 + (9 * (page - 1))).map((capturedPokemon) => (
            <div className="w-48 h-48 flex justify-center items-center rounded-lg m-2" key={capturedPokemon} >
              <PokeboxGrid key={capturedPokemon} pokemonName={capturedPokemon} handleReleasePokemon={handleReleasePokemon} />
            </div>
          )
          )}
          {page === maxPages && (
            [...Array(freeGrids).keys()].map((value) => (
              <div className="bg-gray-100 opacity-50 w-46 h-46 flex justify-center items-center rounded-lg m-3" key={value} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};