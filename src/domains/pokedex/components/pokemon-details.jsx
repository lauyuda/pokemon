import { usePokemon, usePokemonSpecies } from "../hooks/use-pokedex";
import * as React from "react";
import { typeColour } from "../utils/type-color";
import { TypeChip } from "components/typechip";
import { TypeCard } from "components/typecard";
import { StatsTable } from "components/stats-table";
import { AbilitiesTable } from "components/abilities-table";
import { MovesTable } from "components/moves-table";
import { AbilityRow } from "./ability";
import { MoveRow } from "./move";
import { Evolution } from "./evolution";
import { Capture } from "./capture";

export const PokemonDetails = ({ pokemonName }) => {
  const { data, isLoading } = usePokemon(pokemonName);
  const { data: bio, isLoading: isLoadingBio } = usePokemonSpecies(pokemonName);
  const [openTab, setOpenTab] = React.useState(1);
  
  let color = ""
  !isLoading && (color = typeColour(data.types[0].type.name))

  return (
    <div>
      {!isLoading && (
        <div className="flex">
          <div className="fixed w-2/5 px-10 mb-10 mt-5">
            <div className="relative">
              <img src={data.sprites.other.dream_world.front_default} className="w-3/5 relative z-10" alt="" />
              <div className={`flex flex-col border-4 border-${color} absolute top-10 bottom-10 left-10 right-10 z-0 items-start justify-center`} style={{ 'paddingLeft': "55%" }}>
                <p className="text-gray-500 md:text-sm lg:text-xl mt-3"> #{data.id}</p>
                <div className="flex -center gap-2">
                  <p className="capitalize text-gray-800 md:text-l lg:text-3xl font-semibold mb-5"> {pokemonName}</p>
                  <Capture pokemonName={pokemonName} />
                </div>
                <div className="flex gap-2">
                  {data.types.map((type) => (
                    <TypeChip key={type.type.name} type={type.type.name} />
                  )
                  )}
                </div>
              </div>
            </div>
            <div className="mt-10 px-10">
              <TypeCard types={data.types}>
                <div className="space-y-2 py-2 px-4">
                  <div className="leading-tight">
                    <span className="font-semibold">About:</span>
                    {!isLoadingBio && (
                      <div className="font-normal">{bio.flavor_text_entries[2].flavor_text.replace("", " ")}</div>
                    )}
                  </div>
                  <div>
                    <span className="font-semibold">Height: </span>
                    <span className="font-normal">{data.height / 10}m</span>
                  </div>
                  <div>
                    <span className="font-semibold">Weight: </span>
                    <span className="font-normal">{data.weight / 10}kg</span>
                  </div>
                </div>
              </TypeCard>
            </div>
          </div>
          <div className="w-2/5 " />
          <div className="w-3/5 flex flex-wrap mt-12 mr-12">
            <div className="w-full">
              <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              >
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 1
                        ? "text-white bg-" + color
                        : "text-" + color + " bg-white")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    href="#link1"
                  >
                    Stats
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 2
                        ? "text-white bg-" + color
                        : "text-" + color + " bg-white")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    href="#link2"
                  >
                    Abilities
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 3
                        ? "text-white bg-" + color
                        : "text-" + color + " bg-white")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    href="#link3"
                  >
                    Moveset
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 4
                        ? "text-white bg-" + color
                        : "text-" + color + " bg-white")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(4);
                    }}
                    href="#link4"
                  >
                    Evolution
                  </a>
                </li>
              </ul>
              <div className="relative flex flex-col break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="px-4 py-5 flex-auto">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <StatsTable
                      hp={data.stats[0].base_stat}
                      atk={data.stats[1].base_stat}
                      def={data.stats[2].base_stat}
                      spatk={data.stats[3].base_stat}
                      spdef={data.stats[4].base_stat}
                      spd={data.stats[5].base_stat}
                    />
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <AbilitiesTable>
                      {data.abilities && (
                        data.abilities.map((ability) => (
                          <AbilityRow key={ability.ability.name} abilityId={ability.ability.name} />
                        ))
                      )}
                    </AbilitiesTable>
                  </div>
                  <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <MovesTable>
                      {
                        data.moves && (
                          data.moves.map((move) => (
                            <MoveRow key={move.move.name} moveId={move.move.name} />
                          ))
                        )
                      }
                    </MovesTable>
                  </div>
                  <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                    {!isLoadingBio && (
                      <table>
                        <tbody>
                          <Evolution chainUrl={bio.evolution_chain.url} />
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
