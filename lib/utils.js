/**
 * copy all properties from
 * one object to another
 * @param {object} object copying from
 * @param {object} object to add to
 */
function copyProperties(fromObj, toObj) {
	for (let prop in fromObj) {
		toObj[prop] = fromObj[prop];
	}
}

module.exports.copyProperties = copyProperties;
