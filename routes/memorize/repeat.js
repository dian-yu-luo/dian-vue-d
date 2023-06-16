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

router.post("/getwordmeaning"
    , (req, res) => {
        word = req.body.data
        db.get("SELECT Note FROM wordtable WHERE Word = ?", [word], (err, row) => {
            if (err) {
                console.error(err.message);
            } else {
                if (row) {
                    console.log(row.Note);
                    res.send(row.Note)
                }
            }
        });

    }
)

module.exports = router;
