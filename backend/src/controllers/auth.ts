import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import {
  CustomError,
  YELPCAMP_JWT_ACCESS_TOKEN,
  YELPCAMP_JWT_REFRESH_TOKEN,
} from "@utilities/general";
import User from "models/user";
import bcrypt from "bcrypt";

export const generateJwtAccess = (username: string) => {
  const accessToken = jwt.sign({ username: username }, YELPCAMP_JWT_ACCESS_TOKEN, {
    expiresIn: "1hr",
  });

  return accessToken;
};

export const generateJwtRefresh = (username: string) => {
  const accessToken = jwt.sign({ username: username }, YELPCAMP_JWT_REFRESH_TOKEN, {
    expiresIn: "1d",
  });

  return accessToken;
};

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const { userNameOrEmail, password } = req.body;

  const foundUsername = await User.findOne({
    username: userNameOrEmail,
    provider: "DEFAULT",
  });

  const foundEmail = await User.findOne({ emailAddress: userNameOrEmail });

  if (foundUsername) {
    const unhashPasswordUsername = await bcrypt.compare(password, foundUsername.password);

    if (unhashPasswordUsername) {
      const accessToken = generateJwtAccess(foundUsername.username);
      const refreshToken = generateJwtRefresh(foundUsername.username);
      return res.json({
        user: foundUsername,
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    }
  }

  if (foundEmail) {
    const unhashPasswordEmail = await bcrypt.compare(password, foundEmail.password);

    if (unhashPasswordEmail) {
      const accessToken = generateJwtAccess(foundEmail.username);
      const refreshToken = generateJwtRefresh(foundEmail.username);
      return res.json({
        user: foundUsername,
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    }
  }

  if (!foundEmail && !foundUsername) {
    return next(new CustomError("Account does not exists.", 404));
  }
};
