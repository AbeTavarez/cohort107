import { Router } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = new Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    // checks if user already exist in db
    const userExist = await User.findOne({ email });
    console.log(userExist);

    // if true return
    if (userExist) {
      return res.status(400).json({ msg: "User already exist!" });
    }

    // create new user
    const user = await User.create({ email, password });
    console.log(user);

    // create a new token and add user as payload
    const token = jwt.sign({ user }, process.env.SECRET, {
      expiresIn: "24h",
    });

    res.status(201).json(token);
  } catch (error) {
    console.log(error);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Check Credentials!" });
    }

    // check password
    // if using bcrypt, use the bcrypt.compare method
    const passwordMatched = password === user.password;
    if (!passwordMatched) {
      return res.status(400).json({ msg: "Check credentials!" });
    }

    // create a new token and add user as payload
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });

    res.status(201).json(token);
  } catch (error) {
    console.log(error);
  }
});

router.post("/change-password", verifyToken, async (req, res) => {
  console.log(req.user);
  res.send("Token verified!");
});

export default router;
