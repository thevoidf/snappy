let response = {}

/**
 * write body
 * and end the response
 */
response.send = function(body) {
	this.write(body)
	this.end()
}

/**
 * send object as json string
 */
response.json = function(json, indent) {
	this.send(JSON.stringify(json, null, indent))
}

module.exports = response
