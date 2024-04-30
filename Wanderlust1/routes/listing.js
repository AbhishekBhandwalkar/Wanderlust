const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

const listingController = require("../controllers/listings.js");

router.route("/")
.get(wrapAsync(listingController.indexRoute))
.post(isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingController.createRoute));
// .post(upload.single("listing[image]"), (req, res) =>{
//     res.send(req.file);
// })

router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingController.showRoute))
.put(isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(listingController.updateRoute))
.delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyRoute));

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editRoute));



module.exports = router;

// //Index Route
// router.get("/", wrapAsync(listingController.indexRoute));

// //Show Route
// router.get("/:id", wrapAsync(listingController.showRoute));

// //Create Route
// router.post("/", isLoggedIn, validateListing, wrapAsync(listingController.createRoute));

// //Update Route
// router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateRoute));

// //Delete Route
// router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.destroyRoute));

