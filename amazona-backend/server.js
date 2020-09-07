import express from "express";
import dotenv from "dotenv";
/* to deploy */
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import config from "./config.js";
import userRoute from "./routes/userRoutes.js";
import productRoute from "./routes/productRoutes.js";

dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true, //no error on the pages
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json()); //it able to read the data
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
/* don't forget to make the path perfect and done forget to write the /path_name/path_name properly */
/* don't forget to make the path perfect and done forget to write the /path_name/path_name properly 

--> where we have define the root or directory in "/api/products/"+productId at the productListAction action will be map to the "/api/products/:id" and provide us the particular data by using the get method.

--> check the datatypes first x._id===productId

--> product = it takes the data which is selected by the user to see the details of the products (eg: if user selects the first images or the link then product will get that object which is accosiate with that particular product id.product__details--action)

--> check whether the product is empty or not. If not then send the product to window which is requesting for the data.

*/
/* app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x._id === productId);

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: "Product not find" });
  }
});
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

}); */
/* step 3 */
if (process.env.NODE_ENV === "production") {
  app.use(express.static("amazona/build"));
  /*  app.use(express.static(path.join(`${__dirname}/../amazona/build`)));
  app.get("*", (req, res) => {
    res.sendFile(path.join(`${__dirname}/../amazona/build/index.html`));
  }); */
}
app.listen(config.PORT, () => {
  console.log("Server started at http://localhost:5000");
});
/* this is the function which will make the express to run the program in the server
first parameter is for the in which port should the app should run and 
second parameter is the callback function will run when the express will successfully run the server */

/* nodemon is used to make the server to run and start and stop whenver we make the changes */
