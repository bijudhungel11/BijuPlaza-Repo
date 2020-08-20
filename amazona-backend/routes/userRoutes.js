import express from "express";
import User from "../models/userModel.js";
import { getToken } from "../util.js";
const router = express.Router();
router.post("/signin", async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      /* token is identifier which will recognize whether next request is authnicate or not */
      token: getToken(signinUser),
    });
  } else {
    res.status(401).send({ msg: "Invalid Email or Passoword" });
  }
});
router.post("/register", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  const newUser = await user.save();

  if (newUser) {
    res.send({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: getToken(newUser),
    });
  } else {
    res.status(401).send({ msg: "Invalid User Data" });
  }
});

/* router for updating the uers  */
router.put("/:id", async (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  const user = await User.findById(userId);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    const updatedUser = await user.save();
    res.send({
      _id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: getToken(updatedUser),
    });
  } else {
    res.status(404).send({ message: "User not found" });
  }
});
/* end */

/* getting the whether the user is admind or not */
router.get("/createadmin", async (req, res) => {
  try {
    const user = new User({
      name: "Biju Dhungel",
      email: "blazeeagle4321@gmail.com",
      password: "biju1111",
      isAdmin: true,
    });

    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ msg: error.message });
  }
});
/* end */
export default router;
