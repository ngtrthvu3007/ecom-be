import { MESSAGE } from "../constants/messages.js";
import { register, login, update_profile, get_profile, change_password } from "../services/user.services.js";

export const registerController = async (req, res, next) => {
  const result = await register(req.body);
  return res.json({
    message: MESSAGE.REGISTER_SUCCESS,
    result,
  });
};

export const loginController = async (req, res) => {
  const user = req.body;
  const result = await login(user);
  return res.json({
    message: MESSAGE.LOGIN_SUCCESS,
    result,
  });
};

export const updateUserController = async (req, res) => {
  const update_user = req.body;
  const { user_id } = req.decoded_authorization;
  const user = await update_profile(update_user, user_id);
  return res.json({
    message: MESSAGE.UPDATE_YOUR_PROFILE_SUCCESS,
    user,
  });
};
export const getMyProfileController = async (req, res) => {
  const { user_id } = req.decoded_authorization;
  const user = await get_profile(user_id);
  return res.json({
    message: MESSAGE.GET_YOUR_PROFILE,
    user,
  });
};

export const changePasswordController = async (req, res) => {
  const { user_id } = req.decoded_authorization;
  const { new_password } = req.body;
  await change_password(user_id, new_password);
  return res.json({
    message: MESSAGE.CHANGE_PASSWORD_SUCCESS,
  });
};
