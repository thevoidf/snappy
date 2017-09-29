const assert = require('assert')
const utils = require('../lib/utils')

describe('utils.copyProperties(from, to)', function() {
	it('should copy all properties', function() {
		let objectA = {name: 'test', foo: 'pass'}
		let objectB = {}

		utils.copyProperties(objectA, objectB)
		for (let prop in objectA)
			assert.equal(objectA[prop], objectB[prop])
	})
})
