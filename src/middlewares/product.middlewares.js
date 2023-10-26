import { checkSchema } from "express-validator";
import { MESSAGE } from "../constants/messages.js";
import { validate } from "../utils/validateSchema.js";
import { User } from "../models/User.model.js";
import { Product } from "../models/Product.model.js";
import { validateToken } from "../utils/validateToken.js";
import dotenv from "dotenv";
dotenv.config();

export const adminValidator = validate(
  checkSchema(
    {
      Authorization: {
        custom: {
          options: async (value, { req }) => {
            const decoded_authorization = await validateToken(value);
            const { iat, exp, user_id } = decoded_authorization;
            const admin = await User.findById(user_id);

            if (iat >= exp) {
              throw new Error(MESSAGE.TOKEN_IS_EXPIRED);
            }
            if (!admin.isAdmin) {
              throw new Error(MESSAGE.HAVE_NOT_PERMISSION);
            }
            req.decoded_authorization = decoded_authorization;
            return true;
          },
        },
      },
    },
    ["headers"]
  )
);

export const newProductValidator = validate(
  checkSchema(
    {
      sku: {
        notEmpty: {
          errorMessage: MESSAGE.NAME_Is_REQUIRED,
        },
        isString: {
          errorMessage: MESSAGE.NAME_MUST_BE_A_STRING,
        },
        custom: {
          options: async (value) => {
            const existing_product = await Product.findOne({ sku: value });
            if (existing_product) throw new Error(MESSAGE.PRODUCT_SKU_ALREADY_EXISTS);
            return true;
          },
        },
        trim: true,
      },
      name: {
        notEmpty: {
          errorMessage: MESSAGE.NAME_Is_REQUIRED,
        },
        isString: {
          errorMessage: MESSAGE.NAME_MUST_BE_A_STRING,
        },
        custom: {
          options: async (value) => {
            const existing_product = await Product.findOne({ name: value });
            if (existing_product) throw new Error(MESSAGE.PRODUCT_NAME_ALREADY_EXISTS);
            return true;
          },
        },
        trim: true,
      },
      image: {
        notEmpty: {
          errorMessage: MESSAGE.PRODUCT_IMAGE_IS_REQUIRED,
        },
      },
      type: {
        notEmpty: {
          errorMessage: MESSAGE.PRODUCT_TYPE_IS_REQURIRED,
        },
        isString: {
          errorMessage: MESSAGE.PRODUCT_TYPE_MUST_BE_STRING,
        },
      },
      price: {
        notEmpty: {
          errorMessage: MESSAGE.PRODUCT_PRICE_IS_REQUIRED,
        },
        isInt: {
          options: {
            min: 0,
            max: 10000000000, // 10 billion
          },
          errorMessage: MESSAGE.PRODUCT_PRICE_IS_INVALID,
        },
      },
      count_in_stock: {
        notEmpty: {
          errorMessage: MESSAGE.PRODUCT_STOCK_IS_REQUIRED,
        },
        isInt: {
          errorMessage: MESSAGE.PRODUCT_STOCK_IS_NUMBER,
        },
      },
      rating: {
        optional: true,
        isInt: {
          options: {
            min: 0,
            max: 5,
          },
          errorMessage: MESSAGE.PRODUCT_RATE_IS_NUMBER,
        },
      },
      description: {
        optional: true,
        isString: {
          errorMessage: MESSAGE.PRODUCT_DESC_MUST_BE_STRING,
        },
      },
    },
    ["body"]
  )
);
export const updateProductValidator = validate(
  checkSchema(
    {
      name: {
        optional: true,
        custom: {
          options: async (value) => {
            const existing_product = await Product.findOne({ name: value });
            if (existing_product) throw new Error(MESSAGE.PRODUCT_NAME_ALREADY_EXISTS);
            return true;
          },
        },
        trim: true,
      },

      price: {
        optional: true,
        isInt: {
          options: {
            min: 0,
            max: 10000000000, // 10 billion
          },
          errorMessage: MESSAGE.PRODUCT_PRICE_IS_INVALID,
        },
      },
      count_in_stock: {
        optional: true,
        isInt: {
          errorMessage: MESSAGE.PRODUCT_STOCK_IS_NUMBER,
        },
      },
      rating: {
        optional: true,
        isInt: {
          options: {
            min: 0,
            max: 5,
          },
          errorMessage: MESSAGE.PRODUCT_RATE_IS_NUMBER,
        },
      },
    },
    ["body"]
  )
);
