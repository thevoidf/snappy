const http = require('http')
const response = require('./response')
const utils = require('./utils')

module.exports = {
	routes: [],

	defaultRoute: function(req, res) {
		res.send('404 not found')
	},

	/**
	 * create and listen to server
	 */
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

	/**
	 * responde to get request
	 */
	get: function(path, callback) {
		this.routes.push({
			method: 'get',
			path,
			callback
		})
	},

	/**
	 * responde to post request
	 */
	post: function(path, callback) {
		this.routes.push({
			method: 'post',
			path,
			callback
		})
	},

	/**
	 * responde to put request
	 */
	put: function(path, callback) {
		this.routes.push({
			method: 'put',
			path,
			callback
		})
	},

	/**
	 * responde to patch request
	 */
	patch: function(path, callback) {
		this.routes.push({
			method: 'patch',
			path,
			callback
		})
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
	}
}
