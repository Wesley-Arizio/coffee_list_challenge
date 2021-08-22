import { Request, Response } from "express";
import { Knex } from "knex";
import { UpdateCoffeeService } from "./service/UpdateCoffeeService";

export async function UpdateCoffeeController(
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

    const { name, description } = request.body;

    if (!name && !description) {
      return response.status(400).send({
        error: "Cannot update coffee without any name or description",
      });
    }

    const coffeeService = new UpdateCoffeeService(db);

    const { data, error, status } = await coffeeService.execute({
      id,
      name,
      description,
    });

    if (error) {
      return response.status(status).send({ error });
    }

    return response.status(status).send({ data });
  } catch (e) {
    console.error(`Error on updating coffee ${e.message}`);
    return response.status(500).send({ error: "Something went wrong" });
  }
}
