const express = require('express');
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("diandb.db");

const router = express.Router();

router.post(
    "/level1", (req, res) => {
        res.send("我在测试sqlite的点击")
    }
)

module.exports = router;
