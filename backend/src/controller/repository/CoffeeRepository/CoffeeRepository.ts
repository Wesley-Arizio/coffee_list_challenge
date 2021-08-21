import { Knex } from "knex";
import { SaveCoffeeControllerArgs } from "../../SaveCoffee/service/SaveCoffeeService";

export class SaveCoffeeRepository {
  private db: Knex;

  constructor(db: Knex) {
    this.db = db;
  }

  async save({ name, description }: SaveCoffeeControllerArgs) {
    const response = await this.db("coffee").insert({ name, description });

    return response;
  }
}
