const proto = require('./application')
const res = require('./response')
const req = require('./request')
const mixin = require('./utils').merge

module.exports = createApplication

function createApplication() {
	let app = function(req, res, next) {
		req.res = res
		res.req = req
		req.next = next

		Object.setPrototypeOf(req, app.request)
		Object.setPrototypeOf(res, app.response)

		res.locals = res.locals || Object.create(null)

		app.handle(req, res, next)
	}

	mixin(app, proto, false)

	app.request = Object.create(req, {
		app: { configurable: true, enumerable: true, writable: true, value: app }
	})

	app.response = Object.create(res, {
		app: { configurable: true, enumerable: true, writable: true, value: app }
	})

	app.init()

	return app
}
