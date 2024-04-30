const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isReviewAuthor, validateReview} = require("../middleware.js");

const reviewControllers = require("../controllers/reviews.js");

//Review routes
//POST review route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewControllers.postReviewRoute));

//DELETE Review route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewControllers.destroyReviewRoute));

module.exports = router;