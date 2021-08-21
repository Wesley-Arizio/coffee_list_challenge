import App from "./app/app";
import { connection } from "./database/connection";

const app = new App(connection);

app.init();
