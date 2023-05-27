let express = require("express")

let app = express()

app.use(express.json())

app.listen(9001, function(){
    console.log("Application started");
})

app.get("/add", function(req, res){
    let num1 = req.query.num1
    let num2 = req.query.num2
    let results = parseInt(num1) + parseInt(num2)

    res.send(results.toString());

})

app.post("/multiply", function (req, res){

    let num1 = req.body.num1
    let num2 = req.body.num2
    let results = parseInt(num1) * parseInt(num2)
    res.send(results.toString());

})

app.get("/negate/:num1", function(req, res){
    let num1 = req.params.num1
    let results = parseInt(num1) * -1

    res.send(results.toString());

})