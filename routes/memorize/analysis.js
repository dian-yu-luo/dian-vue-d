const express = require('express');
const lemmatizer = require('node-lemmatizer');
const router = express.Router();
const axios = require('axios');

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

router.post("/analysisSentence", (req, res) => {
    const data = req.body.data;
    axios.post('http://localhost:5000/test', { sentence: data },)
        .then(response => {
            const responseData = response.data;
            res.send(responseData);
        })
        .catch(error => {
            res.status(500).send('Internal server error');
        });
});

module.exports = router;
