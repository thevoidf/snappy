const application = require('./application')
const path = require('path')
const fs = require('fs')

let response = {}

/**
 * write body and end the response
 */
response.send = function(body) {
	this.end(body)
}

/**
 * send object as json string
 */
response.json = function(json, indent) {
	this.send(JSON.stringify(json, null, indent))
}

/**
 * render given view from views root path
 * root + view
 */
response.render = function(view) {
	const viewToRender = path.join(this.config.views, view)
	fs.readFile(viewToRender, (err, data) => {
		if (err) throw err
		this.send(data.toString())
	})
}

module.exports = response
