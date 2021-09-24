import { usePokemon } from "../hooks/use-pokedex";
import { TypeCard } from "components/typecard";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Modal } from "components/modal";

export const PokeboxGrid = ({ pokemonName, handleReleasePokemon }) => {
  const { data, isLoading } = usePokemon(pokemonName);
  const [hover, setHover] = useState(true);
  // set state for release pokemon modal
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {!isLoading && (
        <TypeCard types={data.types} isSeeThrough={true}>
          <span
            className="absolute right-1 top-1 rounded-full py-1 px-2 text-red-500 transform hover:scale-110 transition duration-300 hover:cursor-pointer hover:text-red-600"
            onClick={() => { setIsOpen(true) }}>
            <TrashIcon className="h-5 w-5" />
          </span>
          <div onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className="flex flex-col items-center pt-5">
              <Link to={`/pokemon/${pokemonName}`} >
                <img src={data.sprites.front_default} className={`h-32 transform ${hover && "hover: scale-110"} transition duration-300`} alt="" />
              </Link>
            </div>
            <Link to={`/pokemon/${pokemonName}`} className="flex flex-col items-center pb-2 px-6">
              <TypeCard types={data.types}>
                <span className={`flex justify-center text-white ${hover && "font-bold tracking-wide"} py-1 px-2 capitalize text-sm`}>
                  {pokemonName}
                </span>
              </TypeCard>
            </Link>
          </div>
        </TypeCard>
      )}
      {isOpen &&
        <Modal onCancel={() => { setIsOpen(false) }} onRelease={() => { handleReleasePokemon(pokemonName) }} pokemonName={pokemonName} />
      }
    </>
  );
};
