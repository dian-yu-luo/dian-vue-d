const express = require('express');
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("diandb.db");

const router = express.Router();
// 难度高,单词
router.post(
    "/level1", (req, res) => {
        res.send("backent level1111111111111111111111111111")
    }
)
// 难度中等单词
router.post(
    "/level2", (req, res) => {

    }
)
// 难度低单词
router.post(
    "/level3", (req, res) => {

    }
)

router.post("/getwordmeaning"
    , (req, res) => {
        console.log(req.body.data);
        res.send("想写成什么写什么")
    }
)

module.exports = router;
