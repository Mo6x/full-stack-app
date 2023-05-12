import createError from "../utils/createError";
import Review from "../models/reviewModel.js";
import Gig from "../models/gigModel.js";



export const createReview = async (req, res, next) => {
    if (req.isSeller)
    return next(createError(403, "Sellers can't create a review!"));

    const newReview = new Review({
       userId: req.userId,
       gigId: req.body.userId,
       desc: req.body.desc,
       star: req.body.star,
    });

    try{
    const review = await Review.findOne({
        gigId: req.body.gigId,
        userId: req.body.userId,
    });
    if (review)
    return next(createError(403, "You have already created a review for this gig"));

    const saveReview = await newReview.save();
    await Gig.findByIdAndUpdate(req.body.gigId, {
        $inc: { totalStars: req.body.star, starNumber: 1 }, 
    });
    res.status(201).send(saveReview);
    }catch(err) {
      next(err);
    }
};


export const getReviews = async (req, res, next) => {
    
    try{
    const reviews = awaitReview.find({ })
    }catch(err) {
      next(err);
    }
};


export const deleteReviews = async (req, res, next) => {
    
    try{

    }catch(err) {
      next(err);
    }
};