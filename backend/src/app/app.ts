import express, { Express } from "express";

import { Routes } from "./routes";

export default class App {
  private app: Express;
  private PORT = process.env.PORT || 3001;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  init() {
    const { routes } = new Routes("postgres");

    this.app.use(routes);

    this.app.listen(this.PORT, () => {
      console.log("🔥 App running at http://localhost:3001 🔥");
    });
  }
}
