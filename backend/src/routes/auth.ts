import { Router } from "express";
import passport from "passport";

const authRouter = Router();

authRouter.get("/facebook", passport.authenticate("facebook", { session: false }));
authRouter.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login", session: false }),
  function (req, res) {
    // TODO: Handle JWT here
    return res.redirect("http://localhost:5173/dashboard");
  }
);

authRouter.get("/google", passport.authenticate("google", { session: false }));
authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: false }),
  function (req, res) {
    // TODO: Handle JWT here
    return res.redirect("http://localhost:5173/dashboard");
  }
);

export default authRouter;
