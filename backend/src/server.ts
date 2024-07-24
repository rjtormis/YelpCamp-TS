import express from "express";
import app, { PORT } from "@utilities/general";

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoute);
app.use("/campgrounds", campgroundRoute);

app.listen(PORT, () => {
  console.log(`LISTENING IN PORT ${PORT}`);
});
