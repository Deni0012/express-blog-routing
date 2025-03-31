const express = require("express");
const router = express.Router();
const posts = require("../data/posts.js");


//index
router.get('/', function(req, res){
    res.json(posts);
});

//show
router.get('/:id', function(req, res){
    const id = req.params.id;
    const post = posts.find(script => script.slug === id);

    if(script){
        res.json(posts);
    }
});

//store
router.post("/", function(req, res){
   res.send("New Post")
});


//update
router.put("/:id", function(req, res){
    const id = req.params.id;
    res.send('Modifica completa del post $[id]');
});


//modify
router.patch("/:id", function(req, res){
    const id = req.params.id;
    res.send('Modifica parziale del post $[id]');
});

//destroy
router.delete("/:id", function(req, res){
    const id = req.params.id;
    res.send('Elimina elemento $[id]');
});



module.exports = router;























