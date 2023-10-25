import { Product } from "../models/Product.model.js";
import dotenv from "dotenv";
dotenv.config();

export const create_product = async (payload) => {
  const product = await Product.create(payload);
  return product;
};

export const product_detail = async (sku) => {
  const product = await Product.findOne({ sku: sku });
  return product;
};
export const update_product = async (sku, payload) => {
  const product = await Product.findOneAndUpdate(
    { sku: sku },
    { $set: { ...payload }, $currentDate: { updated_at: true } }
  );
  return product;
};

export const delete_product = async (sku) => {
  await Product.deleteOne({ sku: sku });
  return true;
};
// {{host-8080}}/products?sort=price&sort=desc&filter=sku&filter=ip11
export const get_all = async (query) => {
  const { limit, page, sort, filter } = query;
  if (filter) {
    const label = filter[0];
    const products = await Product.find({
      [label]: { $regex: filter[1] },
    })
      .limit(limit ?? 10)
      .skip(page * (limit ?? 10))
      .sort({ createdAt: -1, updatedAt: -1 });
    const total = products.length;
    return { products: products, total: total };
  }
  if (sort) {
    const objectSort = {};
    objectSort[sort[0]] = sort[1];
    const products = await Product.find({})
      .limit(limit ?? 10)
      .skip(page * (limit ?? 10))
      .sort(objectSort);
    const total = products.length;
    return { products: products, total: total };
  }

  if (!limit) {
    const products = await Product.find().sort({ createdAt: -1, updatedAt: -1 });
    const total = products.length;
    return { products: products, total: total };
  } else {
    const products = await Product.find()
      .limit(limit)
      .skip(page * limit)
      .sort({ createdAt: -1, updatedAt: -1 });
    const total = products.length;
    return { products: products, total: total };
  }
};
