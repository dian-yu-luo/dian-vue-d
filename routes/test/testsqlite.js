const express = require('express');
const sqlite = require("better-sqlite3");
const db = new sqlite("diandb.db");

const router = express.Router();

router.post("/level1", (req, res) => {
    res.send("我在测试sqlite的点击")
});

router.post("/init", (req, res) => {
    const str = generateRandomString(8);
    res.send("hello init");

    db.exec("CREATE TABLE IF NOT EXISTS lorem (info TEXT)");
});

router.post("/insert", (req, res) => {
    console.log(req.body.data);
    res.send("成功");

    const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    stmt.run(generateRandomString(20));
});

router.post("/deleteAll", (req, res) => {
    db.exec(`DELETE FROM lorem`);
});

router.post("initwordTable", (req, res) => {

});

module.exports = router;

function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
