const express = require('express');
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{

    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res)=>{

    var phoneNumber = req.body.phoneNumber;
    var password = req.body.password;

    console.log(phoneNumber, password);
})

module.exports = app;