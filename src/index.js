import * as React from "react";
import * as ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { AppShell } from "./app-shell";
import "./index.css";
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Earth } from './components/earth';

import { PageNotFound } from "./pages/404";
import { PokeboxPage } from "pages/pokebox";
import { PokedexScrollCardPage } from "./pages/pokedex-scroll-card";
import { PokedexPage } from "./pages/pokedex";
import { PokemonDetailsPage } from "./pages/pokemon-details";

import { PokemonCounterProvider } from "domains/pokedex";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <PokemonCounterProvider>
        <AppShell>
          <Switch>
            <Route path="/pokedex">
              <PokedexPage />
            </Route>
            <Route path="/pokedexV2">
              <PokedexScrollCardPage />
            </Route>
            <Route path="/pokebox">
              <PokeboxPage />
            </Route>
            <Route path="/pokemon/:pokemonName">
              <PokemonDetailsPage />
            </Route>
            <Route path="/" exact>
              <div className="relative">
                <div className="absolute w-full h-screen-85vh pt-60 top-1/2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50">
                  <div className="space-y-5">
                    <p className="text-gray-900 font-bold text-5xl flex flex-col items-center">
                      <span>Meet every Pokemon,<br /></span>
                      <span>explore every region, and more. </span>
                    </p>
                    <p className="text-gray-900 font-semibold text-3xl flex flex-col items-center">Grow your team with us now.</p>
                    <p className="text-gray-900 font-normal text-xl flex flex-col items-center">Ready to start your adventure?</p>
                    <div className="flex flex-row items-center justify-center">
                      <Link
                        to="/pokedex"
                        className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="absolute w-full h-screen-85vh top-1/2 left-1/2 transform -translate-x-1/2 pb-20 -z-99">
                  <Canvas>
                    <Suspense fallback={null}>
                      <Earth />
                    </Suspense>
                  </Canvas>
                </div>
              </div>
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </AppShell>
      </PokemonCounterProvider>
    </QueryClientProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);
