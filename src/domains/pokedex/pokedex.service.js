import { fetchJson } from "lib/fetch-json";
import { BASE_URL } from "const";

export const getPokedex = (page = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=21", signal) =>
  fetchJson(`${page}`, {
    signal,
  });

export const getPokemon = (pokemonName, signal) =>
  fetchJson(`${BASE_URL}/pokemon/${pokemonName}`, {
    signal,
  });

export const getAllPokemon = (signal) =>
  fetchJson(`${BASE_URL}/pokemon/?limit=898`, {
    signal,
  });

export const getPokemonSpecies = (pokemonName, signal) =>
  fetchJson(`${BASE_URL}/pokemon-species/${pokemonName}`, {
    signal,
  });

export const getPokemonEvolution = (chainUrl, signal) =>
  fetchJson(chainUrl, {
    signal,
  });

export const getAbility = (abilityId, signal) =>
  fetchJson(`${BASE_URL}/ability/${abilityId}`, {
    signal,
  });

export const getMove = (moveId, signal) =>
  fetchJson(`${BASE_URL}/move/${moveId}`, {
    signal,
  });