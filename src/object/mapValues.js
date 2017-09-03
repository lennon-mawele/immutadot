import _mapValues from 'lodash/mapValues'
import { convert } from 'util/convert'

/**
 * Replaces by an object with the same keys as the former object and values generated by running each own enumerable string keyed property of object thru <code>iteratee</code>.
 * The iteratee is invoked with three arguments: (value, key, object).
 * @function
 * @memberof object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {function} [iteratee={@link https://lodash.com/docs#identity|lodash.identity}] The function invoked per iteration.
 * @return {Object} Returns the updated object.
 * @example mapValues({ nested: { a: 1, b: 2, c: 3 } }, 'nested', v => v * v) // => { nested: { a: 1, b: 4, c: 9 } }
 * @example mapValues({ nested: { a: { age: 40, name: 'John' }, b: { age: 30, name: 'Alice' } } }, 'nested', 'age') // => { nested: { a: 40, b: 30 } }
 * @see {@link https://lodash.com/docs#mapValues|lodash.mapValues} for more information.
 * @since 0.1.12
 */
const mapValues = convert(_mapValues)
export { mapValues, mapValues as default }
