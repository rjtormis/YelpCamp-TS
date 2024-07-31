import express, { Request, Response, NextFunction, json, urlencoded } from "express";
import app, {
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  PORT,
} from "@utilities/general";
import { Jwt } from "jsonwebtoken";
import morgan from "morgan";
import passport from "passport";
import passportFacebook from "passport-facebook";
import passportGoogle from "passport-google-oauth20";
import cors from "cors";
import { connectMoongoseDB } from "@utilities/database";
import User from "models/user";

/**
 * Routes
 */

import userRoute from "routes/user";
import campgroundRoute from "routes/campground";
import authRouter from "routes/auth";

/**
 * TODO: Create a general error handler
 *       Add necessary imports such as
 */
connectMoongoseDB();

/**
 * PASSPORT
 */
const FacebookStrategy = passportFacebook.Strategy;
const GoogleStrategy = passportGoogle.Strategy;

app.use(express.json());

app.use(morgan("dev"));
app.use(urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:3000/auth/facebook/callback",
      profileFields: ["id", "emails", "picture.type(large)", "displayName"],
    },
    async function (accessToken, refreshToken, profile, cb) {
      /**
       * Since facebook has accounts that do not have email, let us just
       * query base on the profile id in the username field. Through this parameter
       * `fb-<profile-id>`
       */

      const facebookProfileId = `fb-${profile.id}`;
      const pfp = profile.photos;
      const facebookProfilePicture = pfp![0].value;

      const { email } = profile._json;

      const userExists = await User.findOne({ username: facebookProfileId, provider: "FACEBOOK" });

      if (!userExists) {
        const newUser = new User({
          username: facebookProfileId,
          name: profile.displayName,
          provider: "FACEBOOK",
          image: facebookProfilePicture,
          emailAddress: email,
        });

        await newUser.save();
      }

      return cb(null, profile);
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
      scope: [
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
      ],
    },
    async function (accessToken, refreshToken, profile, cb) {
      const googleProfileId = `google-${profile.id}`;
      const { picture, email } = profile._json;

      const userExists = await User.findOne({ username: googleProfileId, provider: "GOOGLE" });
      if (!userExists) {
        const newUser = new User({
          username: googleProfileId,
          name: profile.displayName,
          provider: "GOOGLE",
          image: picture,
          emailAddress: email,
        });

        await newUser.save();
      }
      return cb(null, profile);
    }
  )
);

app.use("/auth", authRouter);
app.use("/users", userRoute);
app.use("/campgrounds", campgroundRoute);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message, field } = err;

  if (field) {
    res.status(status).json({ status: status, field: field, message: message });
  } else {
    res.status(status).json({ status: status, message: message });
  }
});

app.listen(PORT, () => {
  console.log(`LISTENING IN PORT ${PORT}`);
});
