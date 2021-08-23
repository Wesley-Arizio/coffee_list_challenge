import { Knex } from "knex";
import {
  WrapperServiceResponse,
  wrapperServiceResponse,
} from "../../../util/serviceWrapperResponse";
import { CoffeeRepository } from "../../repository/CoffeeRepository/CoffeeRepository";
import { ImageRepository } from "../../repository/ImageRepository/ImageRepository";

export interface ImageProps {
  name: string;
  data: ArrayBuffer;
}

export interface SaveImageProps {
  coffeeId: string;
  data: ImageProps[];
}

export class SaveImageService {
  private coffeeRepository: CoffeeRepository;
  private imageRepository: ImageRepository;
  constructor(db: Knex) {
    this.coffeeRepository = new CoffeeRepository(db);
    this.imageRepository = new ImageRepository(db);
  }

  async execute({
    coffeeId,
    data,
  }: SaveImageProps): Promise<WrapperServiceResponse> {
    const coffee = await this.coffeeRepository.getCoffee({ id: coffeeId });

    if (!coffee) {
      return wrapperServiceResponse({
        status: 500,
        error: "Coffee Not Found",
        data: null,
      });
    }

    const responses = [];

    for (const image of data) {
      const response = await this.imageRepository.save({
        data: { ...image },
        coffeeId,
      });

      responses.push(response);
    }

    return wrapperServiceResponse({ status: 200, data: responses });
  }
}
