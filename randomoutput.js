var request = require('request');
var url = "http://api.randomuser.me/";
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    data = JSON.parse(body);
    console.log(data);
  }
});