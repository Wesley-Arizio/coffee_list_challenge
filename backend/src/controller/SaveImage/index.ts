import { Knex } from "knex";
import { Request, Response } from "express";
import { SaveImageService } from "./service/SaveImageService";

export async function SaveImageController(
  request: Request,
  response: Response,
  db: Knex
) {
  try {
    const { coffeeId } = request.params;

    if (!coffeeId) {
      return response.status(400).send({ error: "Missing params" });
    }

    if (!request.files) {
      return response.sendStatus(200);
    }

    const files = request.files.file;

    const mappedFiles = (files as any).map((item: any) => ({
      name: item.name,
      data: item.data,
    }));

    const coffeeService = new SaveImageService(db);

    const { status, error, data } = await coffeeService.execute({
      coffeeId,
      data: mappedFiles,
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
