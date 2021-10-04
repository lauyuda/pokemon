import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getPokedex, getPokemon, getAllPokemon,getPokemonSpecies, getPokemonEvolution } from "../pokedex.service";

export const usePokedex = () => {
  const [page, setPage] = useState(window.sessionStorage.getItem('page') || "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=21");

  useEffect(() => {
    window.sessionStorage.setItem('page', page)
  }, [page])
  
  const query = useQuery(["pokedex", page], () => getPokedex(page), {
    staleTime: 3000,
  });

  return {
    ...query,
    page,
    setPage
  };
};

export const usePokemon = (pokemonName) => {
  return useQuery(
    ["pokemonName", pokemonName],
    () => getPokemon(pokemonName),
    {
      staleTime: 3000,
    }
  );
};

export const useAllPokemon = () => {
  return useQuery(
    ["allPokemon"],
    () => getAllPokemon(),
    {
      staleTime: 3000,
    }
  );
};

export const usePokemonSpecies = (pokemonName) => {
  return useQuery(
    ["pokemonNameSpecies", pokemonName],
    () => getPokemonSpecies(pokemonName),
    {
      staleTime: 3000,
    }
  );
};

export const usePokemonEvolution = (chainUrl) => {
  return useQuery(
    ["pokemonEvolution", chainUrl],
    () => getPokemonEvolution(chainUrl),
    {
      staleTime: 3000,
    }
  );
};
