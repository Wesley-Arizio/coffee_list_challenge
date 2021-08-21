import { Knex } from "knex";
import { Coffee } from "../../../Entity/coffee";
import { CoffeeRepository } from "../../repository/CoffeeRepository/CoffeeRepository";

export class GetCoffeeListService {
  private repository: CoffeeRepository;
  constructor(db: Knex) {
    this.repository = new CoffeeRepository(db);
  }

  async execute(): Promise<Coffee> {
    const coffee = await this.repository.getAll();

    return coffee;
  }
}
