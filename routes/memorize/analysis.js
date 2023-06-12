const express = require('express');
const lemmatizer = require('node-lemmatizer');
const router = express.Router();
import axios from 'axios';

function getUniqueWordStems(sentence) {
    // 分割句子成单词数组
    let words = sentence.split(/\W+/);
    rets = []
    for (let index = 0; index < words.length; index++) {
        const element = words[index];
        ret = lemmatizer.lemmas(element)
        rets.push(ret)
    }
    rets = [].concat(...rets)
    return rets;
}

router.post(
    "/analysis", (req, res) => {
        data = ""
        data = req.body.data
        data = getUniqueWordStems(data)
        res.send(data)
    }
)

module.exports = router;
