import { Order } from "../models/Order.model.js";
import { Product } from "../models/Product.model.js";
import { User } from "../models/User.model.js";
import dotenv from "dotenv";
dotenv.config();

export const create_order = async (user_id, payload) => {
  const { address, phone, paymentMethod, products } = payload;
  const { name } = await User.findById(user_id);
  let price = 0;
  const list_product = await Promise.all(
    products.map(async (product) => {
      const product_item = await Product.findById(product.product_id);
      price = price + product.product_amount * product_item.price;
      return {
        name: product_item.name,
        image: product_item.image,
        price: product_item.price,
        amount: product.product_amount,
      };
    })
  );
  const params = {
    user_id: user_id,
    user_name: name,
    address: address,
    phone: phone,
    paymentMethod: paymentMethod,
    paymentStatus: false,
    paidAt: new Date(),
    deliveryStatus: "pending",
    deliveredAt: new Date(),
    orderStatus: "pending",
    shippingPrice: 30000,
    products: list_product.map((product) => {
      return {
        name: product.name,
        amount: product.amount,
        image: product.image,
        price: product.price,
        amountPrice: product.amount * product.price,
      };
    }),
    totalPrice: price,
  };
  const order = await Order.create(params);
  return order;
};

export const detail_order = async (order_id) => {
  const order = await Order.findById(order_id);
  return order;
};

export const all_order = async (user_id, query_params) => {
  const { status: orderStatus } = query_params;
  const query = { user_id };
  if (orderStatus) query.orderStatus = orderStatus;
  const orders = await Order.find(query);
  return orders;
};
export const update_order = async (order_id, update_payload) => {
  const orders = await Order.findOneAndUpdate({ _id: order_id }, update_payload, {
    new: true,
  });
  return orders;
};
