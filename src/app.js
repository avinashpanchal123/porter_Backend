const express = require("express");

const path = require("path")

const app = express();

app.use(express.json())

const Transport = require("./models/transport.model")

app.use(express.static("public"));

app.set("view engine", "ejs")



const static = path.join(__dirname, "../public")
app.use(express.urlencoded({
    extended: false
}))

app.use(express.static(static))
app.get("", (req, res) => {
    res.render("home");
})

app.post("/home", async (req, res) => {
    const transportData = new Transport(req.body);
    await transportData.save();

})

module.exports = app;
