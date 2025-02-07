import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    ISBN: { type: Number, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    descriptionToEncourage: { type: String, required: false },
    yearOfPublication: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    brand: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
