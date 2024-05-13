import wrapper from "@utilities/wrapper";
import { NextFunction, Request, Response } from "express";
import Campground from "models/campground";

const getAllCampground = wrapper(async (req: Request, res: Response) => {
  const campgrounds = await Campground.find({});

  return res.json({ campgrounds: campgrounds });
});

const getSpecificCampground = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body;

  const campground = await Campground.findById(id);

  return res.json({ campground: campground });
});

const createCampground = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  const { id, name, type, location, images } = req.body;

  const campground = new Campground({
    name,
    location,
    images,
    type,
    owner: id,
  });

  await campground.save();

  return res.json({ message: `Campground ${name} successfully created.`, campground: campground });
});

const updateCampground = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  const { id, name, type, location, images } = req.body;

  const updated = await Campground.updateOne(
    {
      id,
    },
    {
      name,
      type,
      location,
      images,
    }
  );

  return res.json({
    message: "Campground updated",
    campground: updated,
  });
});

const deleteCampground = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body;

  await Campground.deleteOne({ id });

  return res.json({
    message: "Campground deleted successfully.",
  });
});

export {
  getAllCampground,
  getSpecificCampground,
  createCampground,
  updateCampground,
  deleteCampground,
};
