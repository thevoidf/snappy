const http = require('http')
const path = require('path')
const utils = require('./utils')

let app = {
	config: {},
	routes: [],
	methods: [
		'get',
		'post',
		'put',
		'path',
		'delete'
	],

	defaultRoute: function(req, res) {
		res.send('404 not found')
	},

	/**
	 * create and listen to server
	 */
	listen: function() {
		const server = http.createServer(this)
		server.listen.apply(server, arguments)
	},

	handle: function(req, res, next) {
		for (let route of this.routes) {
			if (route.path === req.url && route.method === req.method.toLowerCase()) {
				route.callback(req, res, next)
			}
		}
		return null
	},

	/**
	 * responde specified method request
	 */
	on: function(method) {
		let that = this
		return {
			handle: function(path, callback) {
				that.routes.push({
					method,
					path,
					callback
				})
			}
		}
	},

	set: function(setting, val) {
		if (!val) return this.config[setting]
		this.config[setting] = val
	},

	init: function() {
		// some settings
		this.defaultConfig()
	},

	defaultConfig: function() {
		this.set('views', path.join(__dirname, '../examples', 'views'))
	}
}

/**
 * add http verbs
 */
app.methods.forEach(method => {
	app[method] = function(path, callback) {
		this.routes.push({
			method,
			path,
			callback
		})
	}
});

module.exports = app
