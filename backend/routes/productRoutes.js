import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import { isAuth, isAdmin } from "../utils.js";
import Rating from "../models/ratingModel.js";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const products = await Product.aggregate([
    {
      $lookup: {
        from: "ratings",
        localField: "_id",
        foreignField: "product",
        as: "ratings",
      },
    },
  ]);
  res.send(
    (products || []).map((product) => {
      const ratings = product.ratings;
      if (!ratings.length) {
        product.rating = 0;
        product.numReviews = 0;
        return product;
      }
      product.rating =
        ratings.map((rating) => rating.rating)?.reduce(sum_reducer) /
        ratings.length;
      product.numReviews = ratings.length;
      return product;
    })
  );
});

productRouter.post(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const newProduct = new Product({
      title: req.body.title,
      slug: req.body.slug,
      author: req.body.author,
      price: req.body.price,
      image: req.body.image,
      category: req.body.category,
      yearOfPublication: req.body.yearOfPublication,
      countInStock: req.body.countInStock,
      description: req.body.description,
      //descriptionToEncourage: req.body.descriptionToEncourage,
      brand: req.body.brand,
      ISBN: req.body.ISBN,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
 });

    const product = await newProduct.save();
    res.send({ message: "Product Created", product });
  })
);

productRouter.put(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      await { ...product, ...req.body }.save();
      res.send({ message: "Product Updated" });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

productRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.remove();
      res.send({ message: "Product Deleted" });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

const PAGE_SIZE = 3;

productRouter.get(
  "/admin",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const page = query.page || 1;
    const pageSize = query.pageSize || PAGE_SIZE;

    const products = await Product.find()
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    const countProducts = await Product.countDocuments();
    res.send({
      products,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
    });
  })
);

productRouter.get(
  "/search",
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const pageSize = query.pageSize || PAGE_SIZE;
    const page = query.page || 1;
    const category = query.category || "";
    const price = query.price || "";
    const rating = query.rating || "";
    const order = query.order || "";
    const searchQuery = query.query || "";

    const queryFilter =
      searchQuery && searchQuery !== "all"
        ? {
            title: {
              $regex: searchQuery,
              $options: "i",
            },
          }
        : {};
    const categoryFilter = category && category !== "all" ? { category } : {};
    const ratingFilter =
      rating && rating !== "all"
        ? {
            rating: {
              $gte: Number(rating),
            },
          }
        : {};
    const priceFilter =
      price && price !== "all"
        ? {
            // 1-50
            price: {
              $gte: Number(price.split("-")[0]),
              $lte: Number(price.split("-")[1]),
            },
          }
        : {};
    const sortOrder =
      order === "featured"
        ? { featured: -1 }
        : order === "lowest"
        ? { price: 1 }
        : order === "highest"
        ? { price: -1 }
        : order === "toprated"
        ? { rating: -1 }
        : order === "newest"
        ? { createdAt: -1 }
        : { _id: -1 };

    const products = await Product.find({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
    })
      .sort(sortOrder)
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    const newProducts = [];
    for await (const product of products) {
      const ratings = await Rating.find(
        { product: product._id },
        { rating: true, _id: false }
      );
      if (!ratings.length) {
        newProducts.push({ ...product._doc, rating: 0, numReviews: 0 });
        continue;
      }
      newProducts.push({
        ...product._doc,
        rating:
          ratings.map((rating) => rating.rating)?.reduce(sum_reducer) /
          ratings.length,
        numReviews: ratings.length,
      });
    }

    const countProducts = await Product.countDocuments({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
    });
    res.send({
      products: newProducts,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
    });
  })
);

productRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct("category");
    res.send(categories);
  })
);

productRouter.get("/slug/:slug", async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  const ratings = await Rating.find(
    { product: product._id },
    { rating: true, _id: false }
  );

  if (product) {
    res.send({ ...product._doc, rating:
            ratings.length > 0 ? ratings.map((rating) => rating.rating)?.reduce(sum_reducer) /
            ratings.length : 0,
        numReviews: ratings.length, });
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});
productRouter.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

export default productRouter;
