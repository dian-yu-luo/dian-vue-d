const time = new Date().toLocaleString()
console.log(time);
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("diandb.db");

/* db.run("DROP TABLE IF EXISTS words;")
db.serialize(() => {
    db.run(`
    CREATE TABLE words (
      word TEXT,
      time DATETIME,
      difficulty FLOAT
    )
  `, err => {
        console.log(err);
    });
}); */

/* db.serialize(() => {
    db.run(
        "INSERT INTO words (word, time, difficulty) VALUES (?, ?, ?)",
        ["wor2d", time, 3.4],
        function (err) {
            if (err) {
                return console.log(err.message);
            }
            console.log(`A row has been inserted with rowid ${this.lastID}`);
        }
    );
})
 */


function updateWordTime(word, days) {
    // 获取要更新的单词的当前时间值
    let oldTime;
    db.get(
        "SELECT time FROM words WHERE word = ?",
        [word],
        function (err, row) {
            if (err) {
                return console.log(err.message);
            }
            oldTime = new Date(row.time);

            // 将时间增加指定天数
            const newTime = new Date(oldTime.getTime() + days * 24 * 60 * 60 * 1000);

            // 更新数据库中的时间值
            db.run(
                "UPDATE words SET time = ? WHERE word = ?",
                [newTime.toLocaleString(), word],
                function (err) {
                    if (err) {
                        return console.log(err.message);
                    }
                    console.log(`Time for '${word}' has been updated to ${newTime}`);
                }
            );
        }
    );
}

// 调用函数以将时间增加指定天数


updateWordTime("word", 100)