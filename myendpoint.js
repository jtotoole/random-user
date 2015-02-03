var express = require('express');
var app = express();

var first_names = ["James", "Rachel", "Ciara"];
var last_names = ["O'Toole", "Hazes", "Foran"];
var signs = ["Aries", "Libra", "Taurus"];

app.get('/', function(req,res){
	res.json({
		first_name: first_names[(Math.floor(Math.random() * first_names.length))],
		last_name: last_names[(Math.floor(Math.random() * last_names.length))],
		sign: signs[(Math.floor(Math.random() * signs.length))]
	});
});

app.listen(3000);