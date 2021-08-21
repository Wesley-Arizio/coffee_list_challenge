import { Router } from "express";

export class Routes {
  private db: string;
  public routes: Router;

  constructor(dbInstance: string) {
    this.db = dbInstance;
    this.routes = Router();

    this.setRoutes();
  }

  private setRoutes() {
    this.routes.get("/", (request, response) => {
      response.send({ bele: this.db });
    });
  }
}
