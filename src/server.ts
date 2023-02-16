import { App } from "./app";

const server = new App().app;
const port: string = process.env.PORT || "3000";

server.listen(port, () => {
  console.log("Server rodando");
});
