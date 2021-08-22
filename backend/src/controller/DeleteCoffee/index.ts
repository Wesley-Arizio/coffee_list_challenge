import { Request, Response } from "express";
import { Knex } from "knex";
import { DeleteCoffeeService } from "./service/DeleteCoffeeService";

export async function DeleteCoffeeController(
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

    const coffeeService = new DeleteCoffeeService(db);

    const { error, status } = await coffeeService.execute({ id });

    if (error) {
      return response.status(status).send({ error });
    }

    return response.sendStatus(status);
  } catch (e) {
    console.error(`Error on deleting specific coffee ${e.message}`);
    return response.status(500).send({ error: "Something went wrong" });
  }
}
