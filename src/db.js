const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "ec2-52-203-219-32.compute-1.amazonaws.com",
    user: "plank_remote",
    password: "password",
    database: "WeatherApp"
});
var pic1;
var pic2;
var pic3;
var pic4;
const cold = connection.connect(function(err) {
    if (err) throw err;
    connection.query("select address from backgrounds where (weather = 'cold')", function(err, result, fields) {
        if (err) throw err;
        pic1 = console.log(result);
    });
    connection.query("select address from backgrounds where (weather = 'warm')", function(err, result, fields) {
        if (err) throw err;
        pic2 = console.log(result);
    });
    connection.query("select address from backgrounds where (weather = 'rain')", function(err, result, fields) {
        if (err) throw err;
        pic3 = console.log(result);
    });
    connection.query("select address from backgrounds where (weather = 'snow')", function(err, result, fields) {
        if (err) throw err;
        pic4 = console.log(result);
    });
});

var pictures = {
    cold: pic1,
    warm: pic2, 
    rain: pic3,
    snow: pic4
};


module.exports = connection;