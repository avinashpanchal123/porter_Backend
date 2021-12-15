const express = require("express");

const app = express();

app.use(express.json())


app.listen(2345, ()=>{
    console.log("listning on port 2345");
})