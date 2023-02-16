import "dotenv/config";

const password: string | undefined = process.env.PASSWORD_DB;

export const URL = `mongodb+srv://Jonatas:${password}@clusterpokemon.bacewq0.mongodb.net/?retryWrites=true&w=majority`;
