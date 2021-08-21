import express, { Express } from "express";
import { Knex } from "knex";

import { Routes } from "./routes";

export default class App {
  private connection: Knex;
  private app: Express;
  private PORT = process.env.PORT || 3001;

  constructor(connection: Knex) {
    this.app = express();
    this.app.use(express.json());

    this.connection = connection;
  }

  init() {
    const { routes } = new Routes(this.connection);

    this.app.use(routes);

    this.app.listen(this.PORT, () => {
      console.log("🔥 App running at http://localhost:3001 🔥");
    });
  }
}
