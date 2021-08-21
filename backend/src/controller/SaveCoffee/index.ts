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
      return response.status(401).send({ error: "Missing params" });
    }

    const coffeeService = new SaveCoffeeService(db);

    const coffee = await coffeeService.execute({ name, description });

    return response.status(200).send({ coffee });
  } catch (e) {
    console.error(`Error on save coffee ${e.message}`);
    return response.status(500).send({ error: "Something went wrong" });
  }
}
