import { Knex } from "knex";
import { Coffee } from "../../../Entity/coffee";
import {
  wrapperServiceResponse,
  WrapperServiceResponse,
} from "../../../util/serviceWrapperResponse";
import { CoffeeRepository } from "../../repository/CoffeeRepository/CoffeeRepository";

export interface UpdateCoffeeArgs {
  id: string;
  name?: string;
  description?: string;
}

export class UpdateCoffeeService {
  private repository: CoffeeRepository;
  constructor(db: Knex) {
    this.repository = new CoffeeRepository(db);
  }

  async execute({
    id,
    name,
    description,
  }: UpdateCoffeeArgs): Promise<WrapperServiceResponse> {
    const coffee = await this.repository.getCoffee({ id });

    if (!coffee) {
      return wrapperServiceResponse({
        status: 404,
        data: null,
        error: "Coffee not found",
      });
    }

    const fieldsToUpdate: Partial<Coffee> = {};

    if (name) {
      fieldsToUpdate.name = name;
    }

    if (description) {
      fieldsToUpdate.description = description;
    }

    const updatedCoffee = await this.repository.updateCoffee({
      id,
      ...fieldsToUpdate,
    });

    return wrapperServiceResponse({
      status: 200,
      data: updatedCoffee,
    });
  }
}
