import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User",isUnique: false },
        product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                isUnique: false
        },
        rating: { type: Number, required: true, isUnique: false },
    },
    {
        timestamps: true,
    }
);

const Rating = mongoose.model("Rating", ratingSchema);
export default Rating;
