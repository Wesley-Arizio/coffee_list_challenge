import { Knex } from "knex";
import {
  WrapperServiceResponse,
  wrapperServiceResponse,
} from "../../../util/serviceWrapperResponse";
import { CoffeeRepository } from "../../repository/CoffeeRepository/CoffeeRepository";
import { ImageRepository } from "../../repository/ImageRepository/ImageRepository";

export class GetCoffeeListService {
  private coffeeRepository: CoffeeRepository;
  private imageRepository: ImageRepository;
  constructor(db: Knex) {
    this.coffeeRepository = new CoffeeRepository(db);
    this.imageRepository = new ImageRepository(db);
  }

  async execute(): Promise<WrapperServiceResponse> {
    const allCoffees = await this.coffeeRepository.getAll();

    const data = [];

    for (const coffee of allCoffees) {
      const image = await this.imageRepository.getImages(coffee.id);

      data.push({ ...coffee, image });
    }

    return wrapperServiceResponse({
      status: 200,
      data: data,
    });
  }
}
