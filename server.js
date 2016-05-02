var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

var bodyParser=require('body-parser');

app.engine('html',require('ejs').renderFile);
app.set('view engine','html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));



app.get('/',function(req,res){
	res.render('index');
});

app.get('/partials/:page',function(req,res){
	res.render('partials/'+req.params.page);
});

app.get('/home',function(req,res){
	res.render('index');
});

app.listen(3000);
console.log("Server is running on port 3000");

