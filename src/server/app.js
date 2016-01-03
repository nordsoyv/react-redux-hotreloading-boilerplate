const express = require('express');
const path = require('path');

var app = express();
app.use(express.static( path.join(__dirname , '..', '..', '/public')));
app.get('/data/test' , (req, res) => {
    res.json({hello: "world"}).end();
});


var server = app.listen(3001, function () {
    var port = server.address().port;

    console.log('Example app listening at http://localhost:' + port);
});