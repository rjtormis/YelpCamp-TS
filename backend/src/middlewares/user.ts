import { CustomError } from "@utilities/general";
import wrapper from "@utilities/wrapper";
import { NextFunction, Request, Response } from "express";
import User from "models/user";

const findUserByEmail = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  let email;
  if (req.params && req.params.email) {
    email = req.params.email;
  } else if (req.body && req.body.email) {
    email = req.body.email;
  }

  if (!email)
    return next(
      new CustomError("Email does not exists.Please fill out necessary fields.", 404, "email")
    );

  const findUserByEmail = await User.findOne({ emailAddress: email });

  if (!findUserByEmail) return next(new CustomError("User does not exists", 404));

  next();
});

const findUserById = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  let id;
  if (req.params && req.params.id) {
    id = req.params.id;
  } else if (req.body && req.body.id) {
    id = req.body.id;
  }

  if (!id)
    return next(new CustomError("ID does not exists.Please fill out necessary fields.", 404, "id"));

  const findUserById = await User.findById(id);

  if (!findUserById) return next(new CustomError("User does not exists", 404));

  next();
});

export { findUserById, findUserByEmail };
