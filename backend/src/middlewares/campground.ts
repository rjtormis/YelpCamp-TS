import { CustomError } from "@utilities/general";
import wrapper from "@utilities/wrapper";
import { NextFunction, Request } from "express";
import Campground from "models/campground";

const findCampgroundByName = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  let name;

  if (req.params && req.params.name) {
    name = req.params.name;
  } else if (req.body && req.body.name) {
    name = req.body.name;
  }

  if (!name)
    return next(
      new CustomError(
        "Campground name does not exists.Please fill out necessary fields.",
        404,
        "email"
      )
    );

  const findCampgroundByName = await Campground.findOne({ name });
  if (!findCampgroundByName) return next(new CustomError("User does not exists", 404));

  next();
});

const findCampgroundById = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  let id;

  if (req.params && req.params.id) {
    id = req.params.id;
  } else if (req.body && req.body.id) {
    id = req.body.id;
  }

  if (!id)
    return next(
      new CustomError(
        "Campground name does not exists.Please fill out necessary fields.",
        404,
        "email"
      )
    );

  const findCampgroundById = await Campground.findById(id);
  if (!findCampgroundById) return next(new CustomError("User does not exists", 404));

  next();
});

export { findCampgroundByName, findCampgroundById };
