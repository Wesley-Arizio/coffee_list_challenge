import knex from "knex";

import config from "../../knexfile";

export const connection = knex(config.development); // TODO: change the way we set the database environment (dev, prod, test or others)
