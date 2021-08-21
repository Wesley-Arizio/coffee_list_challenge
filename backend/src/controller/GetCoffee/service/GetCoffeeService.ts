import { Knex } from "knex";
import { Coffee } from "../../../Entity/coffee";
import {
  wrapperServiceResponse,
  WrapperServiceResponse,
} from "../../../util/serviceWrapperResponse";
import { CoffeeRepository } from "../../repository/CoffeeRepository/CoffeeRepository";

export class GetCoffeeService {
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

    return wrapperServiceResponse({
      status: 200,
      data: coffee,
    });
  }
}
