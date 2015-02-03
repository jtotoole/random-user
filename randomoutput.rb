require 'sinatra'
require 'json'
require 'HTTParty'

url = "http://api.randomuser.me/"
response = HTTParty.get(url)
		
get '/' do 
	user = response["results"][0]["user"]
	content_type :json
	data = {first_name: user["name"]["first"], 
			last_name: user["name"]["last"], 
			email: user["email"], 
			username: user["username"]}
	data.to_json
end