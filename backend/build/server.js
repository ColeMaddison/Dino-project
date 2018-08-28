"use strict";
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello');
});
app.get('/hello', function (req, res) {
    res.send("World");
});
var PORT = process.env.PORT || '3000';
app.listen(PORT, function () {
    console.log("Server is up and running on port: " + PORT + ".");
});
//# sourceMappingURL=server.js.map