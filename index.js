var express = require ("express");
var app = express();
var mysql = require ("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    database : "classwork",
    user : "root",
    password : "manager",
    port : "3306"

})
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
connection.connect();
console.log("connected succesfully");
app.use(express.json());
app.get('/company',(request,response)=>{
    console.log("inside get");
    var statement = "select * from company";
    connection.query(statement,(err,res)=>{
        if (err == null)
        {
            response.send(JSON.stringify(res));
        }
        else
        {
            response.send(JSON.stringify(err));
        }
    });
});
app.listen(9898,()=>{
    console.log("server started on port ")
})