const path = require('path')
const fs = require('fs')
const http = require('http')

const res = Object.create(http.ServerResponse.prototype)

res.set = function(field, val) {
	this.setHeader(field, val)
}

/**
 * write body and end the response
 * @public
 */
res.send = function(body) {
	this.end(body)
}

/**
 * send object as json string
 * @public
 */
res.json = function(json, indent) {
	this.set('Content-type', 'application/json')
	this.send(JSON.stringify(json, null, indent))
}

/**
 * render given view from views root path
 * root + view
 * @public
 */
res.render = function(view) {
	this.set('Content-type', 'text/html')

	const app = this.req.app
	const config = app.config || {}

	const viewToRender = path.join(config.views, view)
	fs.readFile(viewToRender, (err, data) => {
		if (err) throw err
		this.send(data.toString())
	})
}

module.exports = res
