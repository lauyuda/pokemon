import { PokemonDetails } from "domains/pokedex";
import { useParams } from "react-router-dom";

export const PokemonDetailsPage = () => {
  const params = useParams();
  return (
    <>
      <PokemonDetails pokemonName={params.pokemonName} />
    </>
  );
};
