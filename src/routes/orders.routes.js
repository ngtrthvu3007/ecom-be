import { Router } from "express";
import { wrapAsync } from "../utils/wrapAsync.js";
import { accessTokenValidator } from "../middlewares/user.middlewares.js";
import { adminValidator } from "../middlewares/product.middlewares.js";
import { createOrderValidator, updateOrderValidator } from "../middlewares/order.middelwares.js";
import {
  createProductController,
  getDetailOrderController,
  getAllOrderController,
  updateOrderController,
} from "../controllers/order.controller.js";

const orderRouter = Router();
orderRouter.get("/", accessTokenValidator, wrapAsync(getAllOrderController));
orderRouter.get("/:id", accessTokenValidator, wrapAsync(getDetailOrderController));
orderRouter.post("/create", accessTokenValidator, createOrderValidator, wrapAsync(createProductController));
orderRouter.put("/update/:id", adminValidator, updateOrderValidator, wrapAsync(updateOrderController));
export default orderRouter;
