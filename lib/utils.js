/**
 * copy all properties from
 * one object to another
 */
function copyProperties(fromObj, toObj) {
	for (let prop in fromObj) {
		toObj[prop] = fromObj[prop];
	}
}

module.exports.copyProperties = copyProperties;
