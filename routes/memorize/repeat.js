const express = require('express');

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

module.exports = router;
