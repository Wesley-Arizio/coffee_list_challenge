import { Router } from "express";
import { Knex } from "knex";
import { DeleteCoffeeController } from "../controller/DeleteCoffee";
import { GetCoffeeController } from "../controller/GetCoffee";
import { GetCoffeeListController } from "../controller/GetCoffeeList";
import { SaveCoffeeController } from "../controller/SaveCoffee";
import { UpdateCoffeeController } from "../controller/UpdateCoffee";

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
      GetCoffeeController(request, response, this.db)
    );

    this.routes.get("/coffee", (request, response) =>
      GetCoffeeListController(response, this.db)
    );

    this.routes.patch("/coffee/:id", (request, response) =>
      UpdateCoffeeController(request, response, this.db)
    );

    this.routes.delete("/coffee/:id", (request, response) =>
      DeleteCoffeeController(request, response, this.db)
    );
  }
}
