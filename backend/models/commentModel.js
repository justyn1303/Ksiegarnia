import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User",isUnique: false },
        product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                isUnique: false
        },
        comment: { type: String, required: true,isUnique: false },
    },
    {
        timestamps: true,
    }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
