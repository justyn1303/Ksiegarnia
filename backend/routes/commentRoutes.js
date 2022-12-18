import express from "express";
import expressAsyncHandler from "express-async-handler";
import { isAuth, isAdmin,  } from "../utils.js";
import Comment from "../models/commentModel.js";
//mailgun, payOrderEmailTemplate
const commentRouter = express.Router();

commentRouter.get(
  "/:productId",
  expressAsyncHandler(async (req, res) => {
    const comments = await Comment.find({product:req.params.productId}).populate("user",['email','name']).sort({createdAt:-1});
    res.send(comments);
  })
);

commentRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const newComment = new Comment({
      user: req.user._id,
      product: req.body.productId,
      comment: req.body.comment,
    });
    await newComment.save();
    const comments = await Comment.find({product:req.body.productId}).populate("user",['email','name']).sort({createdAt:-1});
    res.status(201).send({ message: "New Comment Created", comments });
  })
);

export default commentRouter;
