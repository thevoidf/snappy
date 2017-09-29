const http = require('http')
const response = require('./response')
const utils = require('./utils')

module.exports = {
	routes: [],

	defaultRoute: function(req, res) {
		res.send('404 not found')
	},

	listen: function(port) {
		http.createServer((req, res) => {
			utils.copyProperties(response, res)

			let route = this.matchRoute(req.url, req.method)
			route ? route.callback(req, res) : this.defaultRoute(req, res)
		}).listen(port || 3000)
	},

	matchRoute: function(path, method) {
		for (let route of this.routes) {
			if (route.path === path && route.method === method.toLowerCase())
				return route
		}
		return null
	},

	get: function(path, callback) {
		this.routes.push({
			method: 'get',
			path,
			callback
		})
	},

	post: function(path, callback) {
		this.routes.push({
			method: 'post',
			path,
			callback
		})
	},

	put: function(path, callback) {
		this.routes.push({
			method: 'put',
			path,
			callback
		})
	},

	patch: function(path, callback) {
		this.routes.push({
			method: 'patch',
			path,
			callback
		})
	},

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
	}
}
