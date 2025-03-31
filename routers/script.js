const express = require("express");
const router = express.Router();
const posts = require("../data/posts.js");


//index
router.get('/posts.js', function(req, res){
    res.json(posts);
});

//show
router.get('/posts.js/:id', function(req, res){
    res.send()
});

























module.exports = router;