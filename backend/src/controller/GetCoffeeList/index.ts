import { Knex } from "knex";
import { Response } from "express";
import { GetCoffeeListService } from "./service/GetCoffeeListService";

export async function GetCoffeeListController(response: Response, db: Knex) {
  try {
    const coffeeService = new GetCoffeeListService(db);

    const coffeeList = await coffeeService.execute();

    return response.status(200).send({ coffee: coffeeList });
  } catch (e) {
    console.error(`Error on getting coffee list ${e.message}`);
    return response.status(500).send({ error: "Something went wrong" });
  }
}
