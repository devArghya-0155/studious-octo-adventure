const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/calculator.html");
});

app.get("/bmicalculator", (req, res) =>{
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", (req, res) =>{
    let height = parseFloat(req.body.height), weight = parseFloat(req.body.weight);
    let bmi = weight/(height*height);
    res.send("Your BMI is " + bmi);
});

app.post("/", (req, res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let num3 = String(num1 + num2);
    res.send(num3);
});

app.listen(3000, () =>{
    console.log("Server started at port 3000");
});