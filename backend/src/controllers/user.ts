import { NextFunction, Request, Response } from "express";
import bcrypt, { genSalt } from "bcrypt";
import wrapper from "@utilities/wrapper";
import User from "models/user";
import { CustomError } from "@utilities/general";

/**
 * Creates a new user
 * @param name - name of the user
 * @param password - password of the user
 * @param emailAddress - current email address used to register
 * @param provider - determine if they are using socials to login.
 */
const createUser = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  const { name, password, emailAddress, location, provider } = req.body;

  const queryUser = await User.findOne({ emailAddress: emailAddress });

  if (queryUser) return next(new CustomError("User already Exists. Please try again.", 409));

  /**
   * TODO: Handle Socials
   */
  switch (provider) {
    case "default":
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);

      const defaultUser = new User({
        name,
        password: passwordHash,
        emailAddress,
        location,
      });

      await defaultUser.save();

      return res.json({ message: "User created successfully", user: defaultUser });
  }
});

const updateUser = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body;

  const { name, password, emailAddress, location } = req.body;

  const updated = await User.updateOne(
    { id },
    {
      name,
      password,
      emailAddress,
      location,
    }
  );

  return res.json({ message: "User updated successfully.", user: updated });
});

const deleteUser = wrapper(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.body;

  await User.deleteOne({ id });

  return res.json({ message: "User deleted successfully." });
});

export { createUser, updateUser, deleteUser };
