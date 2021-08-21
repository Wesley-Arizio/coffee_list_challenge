import { Knex } from "knex";
import {
  WrapperServiceResponse,
  wrapperServiceResponse,
} from "../../../util/serviceWrapperResponse";
import { CoffeeRepository } from "../../repository/CoffeeRepository/CoffeeRepository";

export class GetCoffeeListService {
  private repository: CoffeeRepository;
  constructor(db: Knex) {
    this.repository = new CoffeeRepository(db);
  }

  async execute(): Promise<WrapperServiceResponse> {
    const allCoffees = await this.repository.getAll();

    return wrapperServiceResponse({
      status: 200,
      data: allCoffees,
    });
  }
}
