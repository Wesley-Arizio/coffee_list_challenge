import { Knex } from "knex";
import { Coffee } from "../../../Entity/coffee";
import { SaveCoffeeControllerArgs } from "../../SaveCoffee/service/SaveCoffeeService";

export class SaveCoffeeRepository {
  private db: Knex.QueryBuilder<Coffee>;

  constructor(db: Knex) {
    this.db = db<Coffee>("coffee");
  }

  async save({ name, description }: SaveCoffeeControllerArgs): Promise<Coffee> {
    const [response] = await this.db
      .insert({ name, description })
      .returning("*");

    return response;
  }
}
