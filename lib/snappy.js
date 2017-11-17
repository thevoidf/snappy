const snappy = require('./application')
const response = require('./response')
const utils = require('./utils')

module.exports = createApplication

function createApplication() {
	// snappy.response = Object.assign(response, snappy.response)
	// utils.copyProperties(response, snappy.response)
	return snappy
}
