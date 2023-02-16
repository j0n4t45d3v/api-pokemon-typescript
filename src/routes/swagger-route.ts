import { Router } from "express";
import swagerUi from "swagger-ui-express";
import swaggerDocs from "../swagger.json";

const routes = Router();

routes.use("/doc", swagerUi.serve);
routes.get("/doc", swagerUi.setup(swaggerDocs));

export default routes;
