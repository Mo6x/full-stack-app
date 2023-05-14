import express from "express";
import { verifyToken } from "../middleware/jwt";
import {
    createReview,
    getReviews,
    deleteReviews,
} from "../controllers/reviewController.js";



const router = express.Router();

router.post("/", verifyToken, createReview);
router.get("/:gigid", getReviews);
router.delete("/:id", deleteReviews);


export default router;