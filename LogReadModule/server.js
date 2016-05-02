/*
* 
@author Sarika Nitin Kale
*
*/
var initRead = require('./read/read.js');
var express=require('express');
var app=express();
//express.use(express.static('',__dirname));
var bodyParser=require('body-parser');
//var mongojs=require('mongojs');
var fs=require('fs');
app.use(bodyParser.json());



//Reading File 
initRead();




//error handlers

//development error handler
//will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error');
	});
}

//production error handler
//no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error');
});

module.exports = (function(){
	return app;
})();