import { Router } from "express";
import { wrapAsync } from "../utils/wrapAsync.js";
import {
  createProductController,
  detailProductController,
  updateProductController,
  destroyProductController,
  getAllProductController,
} from "../controllers/product.controller.js";
import { adminValidator, newProductValidator, updateProductValidator } from "../middlewares/product.middlewares.js";

const productRouter = Router();
productRouter.get("/", wrapAsync(getAllProductController));
productRouter.get("/:sku", wrapAsync(detailProductController));
productRouter.post("/create", adminValidator, newProductValidator, wrapAsync(createProductController));
productRouter.put("/update/:sku", adminValidator, updateProductValidator, wrapAsync(updateProductController));
productRouter.delete("/destroy/:sku", adminValidator, wrapAsync(destroyProductController));
export default productRouter;
