import { Knex } from "knex";
import { Response } from "express";
import { GetCoffeeListService } from "./service/GetCoffeeListService";

export async function GetCoffeeListController(response: Response, db: Knex) {
  try {
    const coffeeService = new GetCoffeeListService(db);

    const { error, status, data } = await coffeeService.execute();

    if (error) {
      return response.status(status).send({ error });
    }

    return response.status(status).send({ data });
  } catch (e) {
    console.error(`Error on getting coffee list ${e.message}`);
    return response.status(500).send({ error: "Something went wrong" });
  }
}
