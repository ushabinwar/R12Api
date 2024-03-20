const express = require("express")
const router = express.Router()

// const User = require("../models/userModel")

const {home, usercreate} = require("../controllers/userControllers");

router.get("/", home);

router.post("/create", usercreate)


module.exports = router

// virtual dom = 
// recontialation = update or reload