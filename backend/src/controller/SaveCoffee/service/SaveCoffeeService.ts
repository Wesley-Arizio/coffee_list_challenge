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

  execute({ name, description }: SaveCoffeeControllerArgs) {
    console.log(name, description);
    return true;
  }
}
