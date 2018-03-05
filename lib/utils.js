/**
 * Merge properties with descriptors
 * from src to dest
 * @param {object} dest object to add to
 * @param {object} src source of properties
 * @param {boolean} [redefine=true] override properties
 * @returns {object} Result dest
 * @public
*/
function merge(dest, src, redefine) {
	if (!dest)
		throw new TypeError('merge: dest is requied')

	if (!src)
		throw new TypeError('merge: src is requied')

	if (redefine == undefined)
		redefine = true

	Object.getOwnPropertyNames(src).forEach(function(name) {
		if (!redefine && dest.hasOwnProperty(name))
			return

		const descriptor = Object.getOwnPropertyDescriptor(src, name)
		Object.defineProperty(dest, name, descriptor)
	})

	return dest
}

module.exports.merge = merge
