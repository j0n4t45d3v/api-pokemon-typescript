import { model, Schema } from "mongoose";

export interface IPokemon extends Document {
  _id: number;
  name: string;
  typePokemon: Array<string>;
}

const PokemonSchema: Schema<IPokemon> = new Schema({
  _id: Number,
  name: String,
  typePokemon: [String],
});

export const Pokemon = model<IPokemon>("Pokemons", PokemonSchema);
