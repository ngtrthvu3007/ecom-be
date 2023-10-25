import { MESSAGE } from "../constants/messages.js";
import { create_order, detail_order, all_order, update_order } from "../services/order.services.js";

export const createProductController = async (req, res) => {
  const { user_id } = req.decoded_authorization;
  const order_payload = req.body;
  const order = await create_order(user_id, order_payload);
  return res.json({
    message: MESSAGE.CREATE_ORDER_SUCCESS,
    order,
  });
};
export const getDetailOrderController = async (req, res) => {
  const order_id = req.params.id;
  const order = await detail_order(order_id);
  return res.json({
    message: MESSAGE.DETAIL_ORDER_SUCCESS,
    order,
  });
};

export const getAllOrderController = async (req, res) => {
  const { user_id } = req.decoded_authorization;
  const query_params = req.query;
  const orders = await all_order(user_id, query_params);
  return res.json({
    message: MESSAGE.GET_ORDERS_SUCCESS,
    orders,
  });
};
export const updateOrderController = async (req, res) => {
  const order_id = req.params.id;
  const update_payload = req.body;
  const updated_order = await update_order(order_id, update_payload);
  return res.json({
    message: MESSAGE.UPDATE_ORDER_SUCCESS,
    updated_order,
  });
};
