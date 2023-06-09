const express = require('express');
const router = express.Router();

const analysis = require("./analysis")
router.use("/memorize", analysis)

module.exports = router;
