import { Router } from "express";
import { wrapAsync } from "../utils/wrapAsync.js";
import {
  registerController,
  loginController,
  updateUserController,
  getMyProfileController,
  changePasswordController,
} from "../controllers/user.controllers.js";

import {
  registerValidator,
  loginValidator,
  updateProfileValidator,
  accessTokenValidator,
  changePasswordValidator,
} from "../middlewares/user.middlewares.js";

const userRouter = Router();

userRouter.post("/login", loginValidator, wrapAsync(loginController));
userRouter.post("/register", registerValidator, wrapAsync(registerController));
userRouter.put("/update-my-profile", accessTokenValidator, updateProfileValidator, wrapAsync(updateUserController));
userRouter.get("/my-profile", accessTokenValidator, wrapAsync(getMyProfileController));
userRouter.put("/change-password", accessTokenValidator, changePasswordValidator, wrapAsync(changePasswordController));

// không có api logout bởi vì client tự lưu access-token và check
// -> nếu token hết hạn -> client tự clear token -> user logout
// userRouter.post("/logout", accessTokenValidator, refreshTokenValidator, wrapAsync(logoutController));

// api forgot-password:
// ý tưởng: người dùng bấm quên mật khẩu -> server tạo 1 password mới
// ->cập nhật dưới db + gửi 1 email chứa password mới
// -> user truy cập mail để lấy password mới -> login bằng mk mới
// -> client trỏ user về page đổi mật khẩu -> đổi mk mới thành công -> client trỏ về trang chủ
export default userRouter;
