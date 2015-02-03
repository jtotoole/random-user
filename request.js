var request = require('request');
var url = "http://api.randomuser.me/";
var express = require('express');
var app = express();

app.get('/', function(req,res){
	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    data = JSON.parse(body);
	    var user = data.results[0].user;
	    var random_user = {
	    	name: user.name.first + " " + user.name.last,
	    	email: user.email,
	    	username: user.username
	    }
	    res.json(random_user);
	  }
	});
});
app.listen(3000);