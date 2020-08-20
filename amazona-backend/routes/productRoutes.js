import express from "express";
import Product from "../models/ProductModal.js";
import { isAuth, isAdmin } from "../util.js";
const router = express.Router();

/* from these router the user can get the list of the product that has been added by the admin */
router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

/* these is use for creating the products */
router.post("/", isAuth, isAdmin, async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  });
  const newProduct = await product.save();
  if (newProduct) {
    /* code for the creating the item */
    return res
      .status(201)
      .send({ message: "Successfully new product created", data: newProduct });
  }
  return res.status(500).send({ message: "Error on creating the product" });
});

/* these route is use when we want to edit the products  */
router.put("/:id", isAdmin, isAuth, async (req, res) => {
  const productId = req.params.id;
  console.log(req.user);
  //console.log(productId);
  const product = await Product.findById(productId);
  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.brand = req.body.brand;
    product.category = req.body.category;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    product.rating = req.body.rating;
    product.numReviews = req.body.numReviews;
    const updatedProduct = await product.save();
    if (updatedProduct) {
      /* code for the creating the item */
      return res.status(200).send({
        message: "Successfully  product updated",
        data: updatedProduct,
      });
    }
    return res.status(500).send({ message: "Error on updating the product" });
  }
});
router.delete("/:id", isAdmin, isAuth, async (req, res) => {
  const productId = req.params.id;
  console.log(productId, "console.log from the productRoutes");
  const deletedProduct = await Product.findById(productId.trim());
  console.log(deletedProduct);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: "product deleted" });
  } else {
    res.send("Error on deleting product");
  }
});

/* this is for adding in the cart and for showing the details of the products  */
router.get("/:id", async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId.trim());

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});
export default router;
