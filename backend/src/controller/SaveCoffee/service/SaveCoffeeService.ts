import { Knex } from "knex";
import { CoffeeRepository } from "../../repository/CoffeeRepository/CoffeeRepository";

export interface SaveCoffeeControllerArgs {
  name: string;
  description: string;
}

export class SaveCoffeeService {
  private repository: CoffeeRepository;
  constructor(db: Knex) {
    this.repository = new CoffeeRepository(db);
  }

  async execute({ name, description }: SaveCoffeeControllerArgs) {
    const coffee = await this.repository.save({ name, description });

    return coffee;
  }
}
