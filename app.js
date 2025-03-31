const express = require("express");
const app = express();
const port = 5500;

app.use(express.static('../public'));

const scriptRouter = require("./routers/script.js");

app.use("./data/posts.js", scriptRouter);


app.listen(port, function (){
    console.log("Server attivo")
});