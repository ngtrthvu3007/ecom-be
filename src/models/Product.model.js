import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    sku: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    count_in_stock: { type: Number, required: true },
    rating: { type: Number },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);
export const Product = mongoose.model("Product", productSchema);
