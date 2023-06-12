const axios = require("axios")
axios.post('http://localhost:5000/test', { sentence: 'your_sentence_here' })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
