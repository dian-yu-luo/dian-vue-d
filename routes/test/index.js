const express = require('express');
const router = express.Router();

const testsqlite = require("./testsqlite")
router.use("/testsqlite", testsqlite)

module.exports = router;
