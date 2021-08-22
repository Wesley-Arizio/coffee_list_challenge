import { Knex } from "knex";
import {
  WrapperServiceResponse,
  wrapperServiceResponse,
} from "../../../util/serviceWrapperResponse";
import { CoffeeRepository } from "../../repository/CoffeeRepository/CoffeeRepository";

export interface SaveCoffeeArgs {
  name: string;
  description: string;
}

export class SaveCoffeeService {
  private repository: CoffeeRepository;
  constructor(db: Knex) {
    this.repository = new CoffeeRepository(db);
  }

  async execute({
    name,
    description,
  }: SaveCoffeeArgs): Promise<WrapperServiceResponse> {
    const coffee = await this.repository.save({ name, description });

    if (!coffee) {
      return wrapperServiceResponse({
        status: 500,
        error: "Could not save your coffee",
        data: null,
      });
    }

    return wrapperServiceResponse({ status: 200, data: coffee });
  }
}
