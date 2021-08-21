import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.raw('create extension if not exists "uuid-ossp"');
  await knex.schema.createTable("coffee", (table) => {
    table
      .uuid("id")
      .primary()
      .unique()
      .notNullable()
      .defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("name").notNullable();
    table.text("description").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("coffee");
  await knex.raw('drop extension if exists "uuid-ossp"');
}
