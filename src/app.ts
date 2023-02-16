import express from "express";
import { Database } from "./database/database";
import routesPokemon from "./routes/pokemon-route";
import routesDoc from "./routes/swagger-route";

export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    new Database().dbConnect();
    this.routes();
  }
  public routes(): void {
    this.app.get("/", (req, res) => {
      res.send("tudo ok");
    });
    this.app.use(routesDoc);
    this.app.use(routesPokemon);
  }
  public middleware(): void {
    this.app.use(express.json());
  }
}
