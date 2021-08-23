import { Knex } from "knex";
import { toBinString } from "../../../util/imageTextProcessor";
import { ImageProps } from "../../SaveImage/service/SaveImageService";

export class ImageRepository {
  private db: Knex;

  constructor(db: Knex) {
    this.db = db;
  }

  async save({
    coffeeId,
    data,
  }: {
    coffeeId: string;
    data: ImageProps;
  }): Promise<any[]> {
    const uint8Array = new Uint8Array(data.data);

    const response = await this.db("preview_image")
      .insert({
        name: data.name,
        image: toBinString(uint8Array),
        coffee_id: coffeeId,
      })
      .returning("*");

    return response;
  }
}
