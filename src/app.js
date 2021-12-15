const express = require("express");

const app = express();

app.use(express.json())

app.set("view engine", "ejs")

app.get("/",(req, res)=>{
    res.render("home")
})


app.listen(2345, ()=>{
    console.log("listning on port 2345");
})