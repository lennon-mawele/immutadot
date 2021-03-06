import { dropRight as _dropRight } from 'lodash'
import { apply } from 'immutadot/core'

/**
 * Replaces an array dropping one or several elements at the end of the former array.
 * @function
 * @memberof array
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {number} [n=1] The number of elements to drop.
 * @return {Object} Returns the updated object.
 * @example dropRight({ nested: { prop: [1, 2, 3, 4] } }, 'nested.prop', 2) // => { nested: { prop: [1, 2] } }
 * @see {@link https://lodash.com/docs#dropRight|lodash.dropRight} for more information.
 * @since 1.0.0
 */
const dropRight = apply(_dropRight, { arity: 1 })
export { dropRight }
