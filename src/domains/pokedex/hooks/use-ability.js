import * as React from "react";
import { useQuery } from "react-query";
import {  getPokedex, getAbility } from "../pokedex.service";

export const usePokedex = () => {
  const [page, setPage] = React.useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20");
  
  const query = useQuery(["pokedex", page], () => getPokedex(page), {
    staleTime: 3000,
  });

  return {
    ...query,
    page,
    setPage
  };
};

export const useAbility = (abilityId) => {
  return useQuery(
    ["ability", abilityId],
    () => getAbility(abilityId),
    {
      staleTime: 3000,
    }
  );
};