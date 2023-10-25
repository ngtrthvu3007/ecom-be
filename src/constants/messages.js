export const MESSAGE = {
  VALIDATION_ERROR: "Validation error",
  EMAIL_ALREADY_EXISTS: "Email already exits",
  PHONE_ALREADY_EXISTS: "Phone already exits",
  NAME_Is_REQUIRED: "Name is required",
  PHONE_Is_REQUIRED: "Phone is required",
  PHONE_Is_INVALID: "Phone is invalid",
  PHONE_ALREADY_EXISTS: "Phone already exits",
  NAME_MUST_BE_A_STRING: "Name must be a string",
  NAME_LENGTH_MUST_BE_FROM_1_TO_100: "Name length must be from 1 to 100",
  EMAIL_IS_INVALID: "Email is invalid",
  EMAIL_IS_REQUIRED: "Email is required",
  PASSWORD_Is_REQUIRED: "Password is required",
  PASSWORD_MUST_BE_A_STRING: "Password must be a string",
  PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50: "Password length must be from 6 to 50",
  PASSWORD_MUST_BE_STRONG: "Password must be contain at least 1 lowercase, 1 uppercase, 1 number, 1 symbol",
  CONFIRM_PASSWORD_Is_REQUIRED: "Confirm password is required",
  CONFIRM_PASSWORD_MUST_BE_A_STRING: "Confirm password must be a string",
  CONFIRM_PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50: "Confirm password length must be from 6 to 50",
  CONFIRM_PASSWORD_MUST_BE_STRONG:
    "Confirm password must be contain at least 1 lowercase, 1 uppercase, 1 number, 1 symbol",
  CONFIRM_PASSWORD_NOT_MATCH: "Confirm password not match with password",
  DAY_OF_BIRTH_MUST_BE_ISO08601: "Day of birth must be ISO08601",
  USER_IS_NOT_FOUND: "User is not found",
  LOGIN_SUCCESS: "Login success",
  REGISTER_SUCCESS: "Register success",
  ACCESS_TOKEN_IS_REQUIRED: "Access token is required",
  REFRESH_TOKEN_IS_REQUIRED: "Refresh token is required",
  REFRESH_TOKEN_IS_INVALID: "Refresh token is invalid",
  REFRESH_TOKEN_IS_NOT_FOUND: "Refresh token is not found",
  LOGOUT_SUCCESS: "Logout success",
  EMAIL_VERIFY_TOKEN_IS_REQUIRED: "Email verify token is required",
  EMail_HAD_VERIFIED: "Email is verified before",
  EMail_VERIFY_SUCCESS: "Email verify success",
  RESEND_EMail_SUCCESS: "Resend email success",
  RESET_PASSWORD_EMAIL_HAVE_SENT: "A reset password email is sent to your email",
  FORGOT_PASSWORK_TOKEN_IS_REQUIRED: "Forgot password token is required",
  VERIFY_FORGOT_PASSWORD_SUCCESS: "Verify forgot password success",
  FORGOT_PASSWORD_IS_NOT_MATCH: "Forgot password token is not match",
  RESET_PASSWORD_SUCCESS: "Reset password success",
  GET_PROFILE_USER_SUCCESS: "Get profile of user success",
  USER_IS_NOT_VERIFIED: "User is not verified",
  BIO_MUST_BE_STRING: "Bio must be a string",
  BIO_LENGTH_MUST_BE_FROM_1_TO_300: "Bio length must be from 1 to 100",
  USER_NAME_MUST_BE_STRING: "User_name must be a string",
  WEBSITE_MUST_BE_STRING: "Website must be a string",
  AVATAR_MUST_BE_STRING: "Avatar must be a string",

  UPDATE_YOUR_PROFILE_SUCCESS: "Update your profile  success",
  GET_YOUR_PROFILE: "Get your profile success",
  FOLLOW_USER_SUCCESS: "You  followed success",
  FOLLOW_USER_ID_IS_REQUIRED: "Followed user id is required",
  FOLLOW_USER_ID_IS_NOT_FOUND: "Followed user id is a string",
  FOLLOW_USER_ID_IS_INVALID: "Followed user id is invalid",
  USER_IS_FOLLOWED: "User is followed",
  UNFOLLOW_USER_SUCCESS: "You  unfollowed success",
  NOT_FOLLOW_YET: "False: You did`nt followed this user",
  USER_IS_NOT_ACTIVE: "User is not active",
  USERNAME_IS_INVALID: "Username must be 4-15 characters and contain only letter, number and underscrores",
  USERNAME_IS_EXIST: "Username is existing",
  REQUEST_SUCCESS: "Request success",
  TOKEN_IS_EXPIRED: "Token is expired, please login again",
  CHANGE_PASSWORD_SUCCESS: "Change password success",
  // User messages end

  //product
  HAVE_NOT_PERMISSION: " You haven't permission",
  CREATE_PRODUCT_SUCCESS: "Creating product success",
  GET_PRODUCT_SUCCESS: "Get product details success",
  UPDATE_PRODUCT_SUCCESS: "Update product success",
  DELETE_PRODUCT_SUCCESS: "Delete product success",
  GET_PRODUCTS_SUCCESS: "Get products success",
  PRODUCT_SKU_IS_REQUIRED: "Product's sku is required",
  PRODUCT_SKU_MUST_BE_STRING: "Product's sku must be a string",
  PRODUCT_SKU_ALREADY_EXISTS: "Product's sku already exits ",
  PRODUCT_NAME_ALREADY_EXISTS: "Product's name already exits ",
  PRODUCT_IMAGE_IS_REQUIRED: "Product's image is required",
  PRODUCT_IMAGE_MUST_BE_STRING: "Product's image must be a string",
  PRODUCT_TYPE_MUST_BE_STRING: "Product's type must be a string",
  PRODUCT_TYPE_IS_REQURIRED: "Product's type is required",
  PRODUCT_PRICE_IS_INVALID: "Product's price min is 0 and max is 10 bilions",
  PRODUCT_PRICE_IS_REQUIRED: "Product's price is required",
  PRODUCT_STOCK_IS_REQUIRED: "Product's number in stock is required",
  PRODUCT_STOCK_IS_NUMBER: "Product's number in stock must be a number",
  PRODUCT_RATE_IS_NUMBER: "Product's rating must be a number min 0 and max 5",
  PRODUCT_DESC_MUST_BE_STRING: "Product's description be a string",

  // order
  USERNAME_IS_REQUIRED: "User name is required",
  USERNAME_IS_STRING: "User name is a string",
  ADDRESS_IS_REQUIRED: "Address is required",
  ADDRESS_IS_STRING: "Address is a string",
  PAYMENT_METHOD_IS_REQUIRED: "Payment method is required",
  PAYMENT_METHOD_IS_STRING: "Payment method is a string",
  PAYMENT_METHOD_IS_INVALID: "Payment method is cash or momo",
  PAYMENT_STATUS_IS_INVALID: "Payment status is boolean",
  PRODUCT_ID_IS_REQUIRED: "Product's id is required",
  PRODUCT_ID_MUST_BE_STRING: "Product's id must be a string",
  PRODUCT_IS_NOT_FOUND: "Product's is not found",
  PRODUCT_IS_OUT_OF_STOCK: "Product's is out of stock",
  PRODUCT_AMOUNT_IS_REQUIRED: "Product's amount is required",
  PRODUCT_AMOUNT_IS_INVALID: "Product amount is greater than 0",
  PRODUCT_AMOUNT_IS_NOT_ENOUGH: "Product in stock is not enough for this order",
  DELIVERY_STATUS_IS_STRING: "Delivery status is a string with pending/shipping/done",
  ORDER_STATUS_IS_STRING: "Order status is a string with pending/shipping/done",
  CREATE_ORDER_SUCCESS: "Create order success",
  UPDATE_ORDER_SUCCESS: "Update order success",
  DETAIL_ORDER_SUCCESS: "Get order detail success",
  GET_ORDERS_SUCCESS: "Get orders success",
};