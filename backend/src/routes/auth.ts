import { CustomError } from "@utilities/general";
import { authenticate, generateJwtAccess, generateJwtRefresh } from "controllers/auth";
import { Router } from "express";
import User from "models/user";
import passport from "passport";

const authRouter = Router();

authRouter.post("/", authenticate);
authRouter.get("/facebook", passport.authenticate("facebook", { session: false }));
authRouter.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login", session: false }),
  async function (req, res, next) {
    const { id } = req.user as any;

    const findUser = await User.findOne({
      username: `fb-${id}`,
    });

    if (!findUser) {
      return next(new CustomError("Account does not exists.", 404));
    }

    const accessToken = generateJwtAccess(findUser.username);
    const refreshToken = generateJwtRefresh(findUser.username);

    const encodedAccessToken = encodeURIComponent(accessToken);
    const encodedRefreshToken = encodeURIComponent(refreshToken);

    const parameter = `?user=fb-${id}&access_token=${encodedAccessToken}&refresh-token=${encodedRefreshToken}`;

    return res.redirect("http://localhost:5173/dashboard" + parameter);
  }
);

authRouter.get("/google", passport.authenticate("google", { session: false }));
authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: false }),
  async function (req, res, next) {
    const { id } = req.user as any;

    const findUser = await User.findOne({
      username: `google-${id}`,
    });

    if (!findUser) {
      return next(new CustomError("Account does not exists.", 404));
    }

    const accessToken = generateJwtAccess(findUser.username);
    const refreshToken = generateJwtRefresh(findUser.username);

    const encodedAccessToken = encodeURIComponent(accessToken);
    const encodedRefreshToken = encodeURIComponent(refreshToken);

    const parameter = `?user=fb-${id}&access_token=${encodedAccessToken}&refresh-token=${encodedRefreshToken}`;

    return res.redirect("http://localhost:5173/dashboard" + parameter);
  }
);

export default authRouter;
