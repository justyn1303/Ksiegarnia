import express from "express";
import expressAsyncHandler from "express-async-handler";
import { isAuth, isAdmin } from "../utils.js";
import Rating from "../models/ratingModel.js";

//mailgun, payOrderEmailTemplate
const ratingRouter = express.Router();

ratingRouter.get(
    "/me/:productId",isAuth,
    expressAsyncHandler(async (req, res) => {
        res.send({ rating: await getRating(null,{ product: req.params.productId, user:req.user._id }) });
    })
);

ratingRouter.get(
  "/:productId",
  expressAsyncHandler(async (req, res) => {
    res.send({ rating: await getRating(req.params.productId) });
  })
);

ratingRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
      console.log(1)
    const ratingId = await findUserRatingIdForProduct(
      req.user._id,
      req.body.productId
    );
    if (ratingId) {
      await Rating.findOneAndUpdate({ _id: ratingId},{ rating: req.body.rating });

      return res
        .status(201)
        .send({
          message: "Rating updated",
          rating: await getRating(req.body.productId),
        });
    }
      console.log(1)
    const newRating = new Rating({
      user: req.user._id,
      product: req.body.productId,
      rating: req.body.rating,
    });
    await newRating.save();
    res
      .status(201)
      .send({
        message: "New rating created",
        rating: await getRating(req.body.productId),
      });
  })
);

const getRating = async (productId, findOperator = { product: productId }) => {
  const ratings = await Rating.find(
      findOperator,
    { rating: true, _id:false }
  );
  if(!ratings.length){
      return undefined
  }
  return (ratings.map(rating => rating.rating).reduce(sum_reducer)/ratings.length);
};

const findUserRatingIdForProduct = async (userId, productId) => {
  const rating = await Rating.findOne(
    { product: productId, user: userId },
    { _id: true }
  );
  return rating?._id?.toString();
};

function sum_reducer(accumulator, currentValue) {
    return accumulator + currentValue;
}

export default ratingRouter;
