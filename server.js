var express=require('express');
var app=express();
var http=require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/templates'));

require("./controllers/controller.js")(app,io);




http.listen(3000,function(){
    console.log("Node Server is setup and it is listening on 3000");
});
