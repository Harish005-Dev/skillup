var express = require('express');
var app = express();
app.get("/", function (request, response) {
    response.send("Hello World " + new Date().toLocaleDateString());

})
app.get("/hello", function (request, response) {
    response.send("Hello World .how are you" + new Date().toLocaleDateString());

})
app.get("/emp", function (request, response) {
    data = [{ "empid": 1, "ename": "abc", "salary": 2000000 }, { "empid": 2, "ename": "abc", "salary": 2200000 }, { "empid": 3, "ename": "abc", "salary": 2050000 }]
    response.send(data);

})
app.listen(8989);
