const express = require('express');
const sqlite = require("better-sqlite3");
const db = new sqlite("testdb.db");

const router = express.Router();

router.post("/level1", (req, res) => {
    res.send("我在测试sqlite的点击")
});

router.post("/init", (req, res) => {
    sql = `
    DROP TABLE IF EXISTS wordnote;
    CREATE TABLE wordnote (
        word TEXT PRIMARY KEY,
        difficulty FLOAT,
        last_operation_time DATETIME,
        last_operation_content TEXT,
        notes TEXT
    );
    
    `
    const str = generateRandomString(8);
    res.send("hello init");

    db.exec(sql);
});

router.post("/insert", (req, res) => {
    console.log(req.body.data);
    res.send("成功laoshi ");
    const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    stmt.run(generateRandomString(20));
});
router.post("/insertWordData", (req, res) => {
    console.log(req.body.data);
    res.send("测试数据");
    sql = `
    INSERT INTO wordnote (word, difficulty, last_operation_time, last_operation_content, notes) 
VALUES ('exassssmple', 2.5, '2023-06-16 14:20:00', 'studied for 30 mins', 'This is an example note');
    `
    db.exec(sql)
    
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
