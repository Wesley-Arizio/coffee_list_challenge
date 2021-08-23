import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.raw('create extension if not exists "uuid-ossp"');
  await knex.schema.createTable("preview_image", (table) => {
    table
      .uuid("id")
      .primary()
      .unique()
      .notNullable()
      .defaultTo(knex.raw("uuid_generate_v4()"));

    table.string("name").notNullable();
    table.binary("image").notNullable();
    table
      .uuid("coffee_id")
      .notNullable()
      .references("id")
      .inTable("coffee")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("preview_image");
  await knex.raw('drop extension if exists "uuid-ossp"');
}
