import mongoose from "mongoose";
/* creating the product database where the data is stored */
/* rating and the numReviews should not be required true */
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  category: { type: String, required: true },
  countInStock: { type: Number, default: 0, required: true },
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  description: { type: String, required: true },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
