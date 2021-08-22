import { Knex } from "knex";
import {
  wrapperServiceResponse,
  WrapperServiceResponse,
} from "../../../util/serviceWrapperResponse";
import { CoffeeRepository } from "../../repository/CoffeeRepository/CoffeeRepository";

export class DeleteCoffeeService {
  private repository: CoffeeRepository;
  constructor(db: Knex) {
    this.repository = new CoffeeRepository(db);
  }

  async execute({ id }: { id: string }): Promise<WrapperServiceResponse> {
    const coffee = await this.repository.getCoffee({ id });

    if (!coffee) {
      return wrapperServiceResponse({
        status: 404,
        data: null,
        error: "Coffee not found",
      });
    }

    const deletedCoffeeResponse = await this.repository.deleteCoffee({ id });

    if (deletedCoffeeResponse !== 1) {
      return wrapperServiceResponse({
        status: 400,
        data: null,
        error: "could not delete the coffee",
      });
    }

    return wrapperServiceResponse({
      status: 200,
      data: null,
    });
  }
}
