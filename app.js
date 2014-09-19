var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');	
app.set('views', path.join( __dirname,'views'));

// use middleware
app.use(express.static(path.join(__dirname,'bower_components')));

app.use(bodyParser());

// define routers

app.use(require('./todos'));

// start the server

app.listen(1337,function(){
	console.log('ready on port 1337')
});







