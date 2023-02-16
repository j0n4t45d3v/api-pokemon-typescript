import { Router } from "express";
import { PokemonController } from "../controller/PokemonController";

const routes = Router();

const pokemonController = new PokemonController();

routes.get("/pokemons", pokemonController.getAllPokemon);

routes.post("/pokemons/register", pokemonController.createPokemon);

routes.delete("/pokemons/remove/:id", pokemonController.deletePokemon);

export default routes;
