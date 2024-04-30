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

router.get("/trending", async (req, res) => {
    const allListings = await Listing.find({category:'trending'});
    let cat = "Trending";
    // allListings.forEach(listing => {
    //     cat = listing.category;
    // });
    res.render("filters/filter.ejs", {allListings, cat});
});

router.get("/bedrooms", async (req, res) => {
    const allListings = await Listing.find({category:'bedrooms'});
    let cat = "Bedrooms";
    res.render("filters/filter.ejs", {allListings, cat});
});

router.get("/cities", async (req, res) => {
    const allListings = await Listing.find({category:'cities'});
    let cat = "Amazing Cities";
    res.render("filters/filter.ejs", {allListings, cat});
});

router.get("/mountains", async (req, res) => {
    const allListings = await Listing.find({category:'mountains'});
    let cat = "Mountains";
    res.render("filters/filter.ejs", {allListings, cat});
});

router.get("/castle", async (req, res) => {
    const allListings = await Listing.find({category:'castle'});
    let cat = "Castle";
    res.render("filters/filter.ejs", {allListings, cat});
});

router.get("/pool", async (req, res) => {
    const allListings = await Listing.find({category:'pool'});
    let cat = "Amazing Pools";
    res.render("filters/filter.ejs", {allListings, cat});
});

router.get("/camping", async (req, res) => {
    const allListings = await Listing.find({category:'camping'});
    let cat = "Camping";
    res.render("filters/filter.ejs", {allListings, cat});
});

router.get("/arctics", async (req, res) => {
    const allListings = await Listing.find({category:'arctics'});
    let cat = "Arctics";
    res.render("filters/filter.ejs", {allListings, cat});
});

router.get("/farming", async (req, res) => {
    const allListings = await Listing.find({category:'farming'});
    let cat = "Farming";
    res.render("filters/filter.ejs", {allListings, cat});
});

router.get("/domes", async (req, res) => {
    const allListings = await Listing.find({category:'domes'});
    let cat = "Domes";
    res.render("filters/filter.ejs", {allListings, cat});
});

router.get("/boats", async (req, res) => {
    const allListings = await Listing.find({category:'boats'});
    let cat = "Boats";
    res.render("filters/filter.ejs", {allListings, cat});
});

module.exports = router;