import { Request, Response } from "express";
import { Knex } from "knex";
import { GetCoffeeService } from "./service/GetCoffeeService";

export async function GetCoffeeController(
  request: Request,
  response: Response,
  db: Knex
) {
  try {
    const { id } = request.params;

    if (!id) {
      return response
        .status(400)
        .send({ error: "something wrong with coffe id" });
    }

    const coffeeService = new GetCoffeeService(db);

    const { data, error, status } = await coffeeService.execute({ id });

    if (error) {
      return response.status(status).send({ error });
    }

    return response.status(status).send({ data });
  } catch (e) {
    console.error(`Error on getting specific coffee ${e.message}`);
    return response.status(500).send({ error: "Something went wrong" });
  }
}
