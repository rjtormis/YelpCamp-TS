import express from "express";
import app, {
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  PORT,
  YELPCAMP_APP_SECRET_KEY,
} from "@utilities/general";
import morgan from "morgan";
import passport from "passport";
import passportFacebook from "passport-facebook";
import { ExtractJwt, Strategy } from "passport-jwt";

/**
 * Routes
 */

import userRoute from "routes/user";
import campgroundRoute from "routes/campground";
import { connectMoongoseDB } from "@utilities/database";

/**
 * TODO: Create a general error handler
 *       Add necessary imports such as
 */
connectMoongoseDB();

/**
 * PASSPORT
 */
const FacebookStrategy = passportFacebook.Strategy;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: YELPCAMP_APP_SECRET_KEY,
};

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:3000/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      // TODO: Implement Facebook strat
      // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
    }
  )
);

passport.use(
  new Strategy(opts, async (payload, done) => {
    // TODO:Implement JWT strat
    // try {
    //   const user = UserModel.findById(payload.id);
    //   if (user) return done(null, user);
    // } catch (error) {
    //   return done(error);
    // }
  })
);

app.use("/users", userRoute);
app.use("/campgrounds", campgroundRoute);

app.listen(PORT, () => {
  console.log(`LISTENING IN PORT ${PORT}`);
});
