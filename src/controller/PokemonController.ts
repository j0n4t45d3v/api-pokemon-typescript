import { Request, Response } from "express";
import { IPokemon, Pokemon } from "../model/Pokemon";

export class PokemonController {
  public async createPokemon(req: Request, res: Response): Promise<Response> {
    const pokemon: IPokemon = req.body;

    try {
      await Pokemon.create(pokemon);
      return res
        .status(201)
        .json({ message: "pokemon adicionado com sucesso!" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  public async getAllPokemon(req: Request, res: Response): Promise<Response> {
    try {
      const pokemon = await Pokemon.find();
      return res.status(200).json(pokemon);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  public async deletePokemon(req: Request, res: Response): Promise<Response> {
    const id: string = req.params.id;

    const pokemonExist = await Pokemon.findById(id);

    if (!pokemonExist) {
      return res.status(404).json({ message: "pokemon não encontrado" });
    }

    try {
      await Pokemon.findByIdAndDelete(id);
      return res.status(200).json({ message: "Pokemon removido com sucesso!" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}
