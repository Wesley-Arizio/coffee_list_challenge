import { Knex } from "knex";
import { Coffee } from "../../../Entity/coffee";
import { SaveCoffeeArgs } from "../../SaveCoffee/service/SaveCoffeeService";
import { UpdateCoffeeArgs } from "../../UpdateCoffee/service/UpdateCoffeeService";

export class CoffeeRepository {
  private db: Knex;

  constructor(db: Knex) {
    this.db = db;
  }

  async save({ name, description }: SaveCoffeeArgs): Promise<Coffee> {
    const [response] = await this.db("coffee")
      .insert({ name, description })
      .returning("*");

    return response;
  }

  async getAll(): Promise<Coffee[]> {
    const coffees = await this.db("coffee").select("*");

    return coffees;
  }

  async getCoffee({ id }: { id: string }): Promise<Coffee> {
    const [coffee] = await this.db("coffee").select("*").where("id", id);

    return coffee;
  }

  async updateCoffee({
    id,
    ...fieldsToUpdate
  }: UpdateCoffeeArgs): Promise<Coffee> {
    const [coffeeUpdated] = await this.db("coffee")
      .update(fieldsToUpdate)
      .where("id", id)
      .returning("*");

    return coffeeUpdated;
  }
}
