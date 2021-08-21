import { Knex } from "knex";
import { Request, Response } from "express";

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

    return response.send(200);
  } catch (e) {
    console.error(`Error on save coffee ${e.message}`);
    return response.status(500).send({ error: "Something went wrong" });
  }
}
