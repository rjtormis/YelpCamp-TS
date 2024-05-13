import express from "express";
import app, { PORT } from "@utilities/general";

/**
 * Routes
 */

import userRoute from "routes/user";

/**
 * TODO: Create a general error handler
 *       Add necessary imports such as
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`LISTENING IN PORT ${PORT}`);
});
