import { MESSAGE } from "../constants/messages.js";
import {
  create_product,
  product_detail,
  update_product,
  delete_product,
  get_all,
} from "../services/product.services.js";

export const createProductController = async (req, res) => {
  const payload = req.body;
  const product = await create_product(payload);
  return res.json({
    message: MESSAGE.CREATE_PRODUCT_SUCCESS,
    product,
  });
};
export const detailProductController = async (req, res) => {
  const product_sku = req.params.sku;
  const product = await product_detail(product_sku);
  return res.json({
    message: MESSAGE.GET_PRODUCT_SUCCESS,
    product,
  });
};
export const updateProductController = async (req, res) => {
  const product_sku = req.params.sku;
  const product_params = req.body;
  const updated_product = await update_product(product_sku, product_params);
  return res.json({
    message: MESSAGE.UPDATE_PRODUCT_SUCCESS,
    updated_product,
  });
};
export const destroyProductController = async (req, res) => {
  const product_sku = req.params.sku;
  await delete_product(product_sku);

  return res.json({
    message: MESSAGE.DELETE_PRODUCT_SUCCESS,
  });
};
export const getAllProductController = async (req, res) => {
  const query_params = req.query;
  const result = await get_all(query_params);

  return res.json({
    message: MESSAGE.GET_PRODUCTS_SUCCESS,
    result,
  });
};
// refactor get_all service .
