let response = {}

response.send = function(body) {
	this.end(body)
}

response.json = function(json, indent) {
	this.send(JSON.stringify(json, null, indent))
}

module.exports = response
