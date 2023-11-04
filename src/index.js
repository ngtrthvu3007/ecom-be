import express from "express";
import dotenv from "dotenv";
import { databaseConnection } from "./services/database.js";
import { defaultErrorHandler } from "./middlewares/errorHandler.js";
import userRouter from "./routes/users.routes.js";
import productRouter from "./routes/products.routes.js";
import orderRouter from "./routes/orders.routes.js";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

databaseConnection();
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const homefile = path.join(__dirname, "..", "public", "home.html");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(homefile);
});
app.use(defaultErrorHandler);
app.listen(port, () => {
  console.log("Server is ready on port: ", port);
});
