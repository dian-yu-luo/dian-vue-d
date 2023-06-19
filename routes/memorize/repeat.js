const express = require('express');
const sqlite = require("better-sqlite3");
const db = new sqlite("diandb.db");

const router = express.Router();
// 难度高,单词
router.post(
    "/level1", (req, res) => {
        res.send("永远的测试数据")
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

router.post("/getall", (req, res) => {
    const data = req.body.data;
    console.log(data);
    const sql = `SELECT * FROM wordtable WHERE Word IN (${data.map(() => '?').join(',')})`;
    const result = db.prepare(sql).all(data);
    console.log(result);


    res.send("返回对应的界面")
}
)
router.post("/getwordmeaning", (req, res) => {
    const word = req.body.data;
    const stmt = db.prepare("SELECT Note FROM wordtable WHERE Word = ?");
    const row = stmt.get(word);
    if (row) {
        console.log(row.Note);
        res.send(row.Note);
    } else {
        console.error("Word not found");
    }
});


module.exports = router;
