const express = require('express');
const app = express();
const posts = require('./posts');
const rateLimit = require('express-rate-limit');


const limiter = rateLimit({
    max: 5,
    windowMs: 10000
})


app.get('/posts', limiter, (req, res) => {
    res.send({
        status: "Sucess",
        posts: posts
    })
})

app.listen(5000, () => console.log("Listening on port 5000"));