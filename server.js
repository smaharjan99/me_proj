var express = require('express');
var app = express();

//hosting static files
app.use(express.static(__dirname +'/'));


app.get('/', function (req, res) {
	res.redirect('/view/index.html');
})


app.listen(3333, function(req,res){
		console.log('listening');
})