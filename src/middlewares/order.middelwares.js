import { checkSchema } from "express-validator";
import { MESSAGE } from "../constants/messages.js";
import { validate } from "../utils/validateSchema.js";
import { Product } from "../models/Product.model.js";
import dotenv from "dotenv";
dotenv.config();

export const createOrderValidator = validate(
  checkSchema(
    {
      address: {
        notEmpty: {
          errorMessage: MESSAGE.ADDRESS_IS_REQUIRED,
        },
        isString: {
          errorMessage: MESSAGE.ADDRESS_IS_STRING,
        },
        trim: true,
      },
      phone: {
        isMobilePhone: {
          locale: "vi-VN",
          errorMessage: MESSAGE.PHONE_Is_INVALID,
        },
        notEmpty: {
          errorMessage: MESSAGE.PHONE_Is_REQUIRED,
        },
      },
      paymentMethod: {
        notEmpty: {
          errorMessage: MESSAGE.PAYMENT_METHOD_IS_REQUIRED,
        },
        isString: {
          errorMessage: MESSAGE.PAYMENT_METHOD_IS_STRING,
        },
        custom: {
          options: async (value) => {
            if (value === "cash" || value === "momo") return true;
            throw new Error(MESSAGE.PAYMENT_METHOD_IS_INVALID);
          },
        },
        trim: true,
      },
      products: [
        {
          product_id: {
            notEmpty: {
              errorMessage: MESSAGE.PRODUCT_ID_IS_REQUIRED,
            },
            isString: {
              errorMessage: MESSAGE.PRODUCT_ID_MUST_BE_STRING,
            },
            custom: {
              options: async (value) => {
                const product = await Product.findById(value);
                if (!product) throw new Error(MESSAGE.PRODUCT_IS_NOT_FOUND);
                if (!product.count_in_stock) throw new Error(MESSAGE.PRODUCT_IS_OUT_OF_STOCK);
                return true;
              },
            },
          },
          product_amount: {
            notEmpty: {
              errorMessage: MESSAGE.PRODUCT_AMOUNT_IS_REQUIRED,
            },
            isInt: {
              options: {
                min: 1,
                max: 10000,
              },
              errorMessage: MESSAGE.PRODUCT_AMOUNT_IS_INVALID,
            },
            custom: {
              options: async (value, { req }) => {
                const product = await Product.findById(req.body.product_id);
                if (!product) throw new Error(MESSAGE.PRODUCT_IS_NOT_FOUND);
                if (product.count_in_stock < value) throw new Error(MESSAGE.PRODUCT_AMOUNT_IS_NOT_ENOUGH);
                return true;
              },
            },
          },
        },
      ],
    },
    ["body"]
  )
);
export const updateOrderValidator = validate(
  checkSchema({
    address: {
      isString: {
        errorMessage: MESSAGE.ADDRESS_IS_STRING,
      },
      trim: true,
    },
    phone: {
      optional: true,
      isMobilePhone: {
        locale: "vi-VN",
        errorMessage: MESSAGE.PHONE_Is_INVALID,
      },
    },
    paymentStatus: {
      isBoolean: {
        errorMessage: MESSAGE.PAYMENT_STATUS_IS_INVALID,
      },
    },
    deliveryStatus: {
      isString: {
        errorMessage: MESSAGE.DELIVERY_STATUS_IS_STRING,
      },
      custom: {
        options: async (value) => {
          if (value === "pending" || value === "shipping" || value === "done") return true;
          throw new Error(MESSAGE.DELIVERY_STATUS_IS_STRING);
        },
      },
      trim: true,
    },
    orderStatus: {
      optional: true,
      isString: {
        errorMessage: MESSAGE.ORDER_STATUS_IS_STRING,
      },
      custom: {
        options: async (value) => {
          if (value === "pending" || value === "shipping" || value === "done") return true;
          throw new Error(MESSAGE.ORDER_STATUS_IS_STRING);
        },
      },
      trim: true,
    },
  })
);
