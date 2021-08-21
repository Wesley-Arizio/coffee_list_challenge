import { Knex } from "knex";
import { SaveCoffeeRepository } from "../../repository/CoffeeRepository/CoffeeRepository";

export interface SaveCoffeeControllerArgs {
  name: string;
  description: string;
}

export class SaveCoffeeService {
  private repository: SaveCoffeeRepository;
  constructor(db: Knex) {
    this.repository = new SaveCoffeeRepository(db);
  }

  async execute({ name, description }: SaveCoffeeControllerArgs) {
    const coffee = await this.repository.save({ name, description });

    return coffee;
  }
}
