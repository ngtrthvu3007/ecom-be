import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    user_name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    paymentMethod: { type: String, required: true, default: "cash" },
    paymentStatus: { type: Boolean, default: false },
    paidAt: { type: Date, default: Date.now },
    deliveryStatus: { type: String, default: "pending" },
    deliveredAt: { type: Date, default: Date.now },
    shippingPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    orderStatus: { type: String, required: true, default: "pending" },
    products: [
      {
        name: { type: String, required: true },
        amount: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);
export const Order = mongoose.model("Order", orderSchema);
