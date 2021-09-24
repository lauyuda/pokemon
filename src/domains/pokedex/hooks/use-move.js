import { useQuery } from "react-query";
import { getMove } from "../pokedex.service";

export const useMove = (moveId) => {
  return useQuery(
    ["move", moveId],
    () => getMove(moveId),
    {
      staleTime: 3000,
    }
  );
};