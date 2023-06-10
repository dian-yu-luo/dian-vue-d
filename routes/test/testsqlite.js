const express = require('express');
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("diandb.db");

const router = express.Router();



router.post(
    "/level1", (req, res) => {
        res.send("我在测试sqlite的点击")
    }
)

router.post("/init",
    (req, res) => {
        str = generateRandomString(8)
        res.send("hello init")
        db.serialize(() => {
            db.run("CREATE TABLE lorem (info TEXT)")
        })
    }
)
// 必须要写返回数据,告诉前端我已经成功完成了信息
router.post("/insert", (req, res) => {
    console.log(req.body.data);
    res.send("成功") 
    db.serialize(() => {
        const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        stmt.run(generateRandomString(20)) 
    })
})

router.post("/deleteAll", (req, res) => {
    db.serialize(() => {
        db.run(`DELETE FROM lorem `)
    })
})


router.post("initwordTable", (req, res) => {

})



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