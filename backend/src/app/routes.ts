import { Router } from "express";
import { Knex } from "knex";

export class Routes {
  private db: Knex;
  public routes: Router;

  constructor(dbInstance: Knex) {
    this.db = dbInstance;
    this.routes = Router();

    this.setRoutes();
  }

  private setRoutes() {
    this.routes.get("/", async (request, response) => {
      const results = await this.db("coffee").select("*");
      return response.send({ bele: results });
    });
  }
}
