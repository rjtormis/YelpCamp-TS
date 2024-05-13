import {
  createCampground,
  deleteCampground,
  getAllCampground,
  getSpecificCampground,
  updateCampground,
} from "controllers/campground";
import { Router } from "express";
import { findCampgroundById, findCampgroundByName } from "middlewares/campground";

const campgroundRoute = Router();

campgroundRoute.route("/").get(getAllCampground).post(findCampgroundByName, createCampground);
campgroundRoute
  .route("/:cid")
  .get(findCampgroundById, getSpecificCampground)
  .patch(findCampgroundById, updateCampground)
  .delete(findCampgroundById, deleteCampground);

export default campgroundRoute;
