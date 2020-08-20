import jwt from "jsonwebtoken";
import config from "./config.js";
const getToken = (user) => {
  console.log("taking the token of the ", user);
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    config.JWT_SECRET,
    {
      expiresIn: "48h",
    }
  );
};

const isAuth = (req, res, next) => {
  const token = req.headers.authorization;
  /* console.log("token", token);
  console.log("the value has been came from the util.js", req.user); */
  //console.log(user);
  if (token) {
    const onlyToken = token.slice(6, token.length);
    console.log("onlyToken", onlyToken);
    jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ msg: "Invalid Token" });
      }
      console.log("decode where the user is req.user", decode);
      req.user = decode;
      next();
    });
  } else {
    return res.status(401).send({ msg: "Token is not supplied" });
  }
};

const isAdmin = (req, res, next) => {
  const token = req.headers.authorization;
  /* console.log("token", token);
  console.log("the value has been came from the util.js", req.user);
  //console.log(user); */
  if (token) {
    const onlyToken = token.slice(6, token.length);
    console.log("onlyToken", onlyToken);
    jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
      return (req.user = decode);
    });
  }

  /* console.log("checking whether the user.isAdmin has value or not", req);
  console.log("checking the value of req.User", req.user);
  console.log("req.user from isAdmin", req.user);
  console.log("req.user.isAdmin", req.user.isAdmin); */
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(401).send({ msg: "Admin Token is not valid." });
};
export { getToken, isAuth, isAdmin };
