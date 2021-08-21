import { Knex } from "knex";
import { Request, Response } from "express";
import { SaveCoffeeService } from "./service/SaveCoffeeService";

export async function SaveCoffeeController(
  request: Request,
  response: Response,
  db: Knex
) {
  try {
    const { name, description } = request.body;

    if (!name || !description) {
      return response.status(400).send({ error: "Missing params" });
    }

    const coffeeService = new SaveCoffeeService(db);

    const { status, error, data } = await coffeeService.execute({
      name,
      description,
    });

    if (error) {
      return response.status(status).send({ error });
    }

    return response.status(status).send({ data });
  } catch (e) {
    console.error(`Error on save coffee ${e.message}`);
    return response.status(500).send({ error: "Something went wrong" });
  }
}
