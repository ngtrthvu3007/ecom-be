import express from "express";
import dotenv from "dotenv";
import { databaseConnection } from "./services/database.js";
import { defaultErrorHandler } from "./middlewares/errorHandler.js";
import userRouter from "./routes/users.routes.js";
import productRouter from "./routes/products.routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

databaseConnection();
app.use(express.json());

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(port, () => {
  console.log("Server is ready on port: ", port);
});
app.use(defaultErrorHandler);
