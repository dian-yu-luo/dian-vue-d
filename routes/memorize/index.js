const express = require('express');
const router = express.Router();

const analysis = require("./analysis")
router.use("/analysis", analysis)

const repeat = require("./repeat")
router.use("/repeat", repeat)

module.exports = router;
