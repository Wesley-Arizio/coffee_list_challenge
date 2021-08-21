import { Router } from "express";
import { Knex } from "knex";
import { GetCoffeeListController } from "../controller/GetCoffeeList";
import { SaveCoffeeController } from "../controller/SaveCoffee";

export class Routes {
  private db: Knex;
  public routes: Router;

  constructor(dbInstance: Knex) {
    this.db = dbInstance;
    this.routes = Router();

    this.setRoutes();
  }

  private setRoutes() {
    this.routes.post("/coffee", (request, response) =>
      SaveCoffeeController(request, response, this.db)
    );

    this.routes.get("/coffee/:id", (request, response) =>
      response.status(200).send()
    );

    this.routes.get("/coffee", (request, response) =>
      GetCoffeeListController(response, this.db)
    );

    this.routes.patch("/coffee/:id", (request, response) =>
      response.status(200).send()
    );

    this.routes.delete("/coffee/:id", (request, response) =>
      response.status(200).send()
    );
  }
}
