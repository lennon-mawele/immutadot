![immutadot logo](https://raw.githubusercontent.com/zenika-open-source/immutadot/master/misc/otter.svg?sanitize=true)
===

A JavaScript library to deal with nested immutable structures.

```js
set({ english: { greeting: 'Hi' } }, 'english.greeting', 'Hello')
// → { english: { greeting: 'Hello' } }

push({ i18n: { languages: ['English', 'French'] } }, 'i18n.languages', 'German', 'Spanish')
// → { i18n: { languages: ['English', 'French', 'German', 'Spanish'] } }
```
immutadot gives you a short and meaningful syntax to apply operations on immutable structures.

[![npm version](https://badge.fury.io/js/immutadot.svg)](https://badge.fury.io/js/immutadot)
[![Try on RunKit](https://badge.runkitcdn.com/immutadot.svg)](https://npm.runkit.com/immutadot)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://immutadot.zenika.com/api/immutadot)

[![CircleCI](https://circleci.com/gh/zenika-open-source/immutadot.svg?style=shield&circle-token=8b309750f5785783ec9fb4531ba097da60563beb)](https://circleci.com/gh/zenika-open-source/immutadot)
[![codecov](https://codecov.io/gh/zenika-open-source/immutadot/branch/master/graph/badge.svg)](https://codecov.io/gh/zenika-open-source/immutadot)
[![gitmoji-changelog](https://img.shields.io/badge/Changelog-gitmoji-brightgreen.svg)](https://github.com/frinyvonnick/gitmoji-changelog)

## [2.0](https://github.com/zenika-open-source/immutadot/milestone/12) is in alpha :tada:

immutadot 2.0 in a nutshell:
 - :zap: Performance improvements (immutadot's way of navigating structures has been rewritten)
 - :sparkles: [Negative array indexes](https://github.com/zenika-open-source/immutadot/issues/169)
 - :sparkles: [Step in slice notation](https://github.com/zenika-open-source/immutadot/issues/295)
 - :sparkles: [`get()`](https://immutadot.zenika.com/api/immutadot/2.0/core.html#.get) now supports all kinds of paths

Test it:

```shell
yarn add immutadot@2.0.0-alpha.1
# or
npm install immutadot@2.0.0-alpha.1
```

New documentation is available here:
- [immutadot 2.0](https://immutadot.zenika.com/api/immutadot/2.0)
- [immutadot-lodash 2.0](https://immutadot.zenika.com/api/immutadot-lodash/2.0)

## Installation

immutadot is available on [npm repository](https://www.npmjs.com/package/immutadot).

using yarn:

```shell
$ yarn add immutadot
```

using npm:

```shell
$ npm install immutadot
```

## Usage

ES modules:

```js
import { set } from 'immutadot'
```

CommonJS:  

```js
const { set } = require('immutadot')
```

### Example

Quickly set nested properties using [set()](https://immutadot.zenika.com/api/immutadot/1.0/core.html#.set)

```js
import { set } from 'immutadot'

const animals = {
  weasels: {
    lutraLutra: {
      commonNames: ['eurasian otter'],
    },
  },
}

const newAnimals = set(animals, 'weasels.lutraLutra.name', 'Lutrinae')
```

Learn more about what immutadot can do in the [Getting started](https://immutadot.zenika.com/GETTING_STARTED.html).

Feel free to [try immutadot on runkit](https://npm.runkit.com/immutadot).

## Documentation

### Getting started

A fast overview of immutadot's features is available in the [Getting started](https://immutadot.zenika.com/GETTING_STARTED.html) guide.

### API

The detailed API documentations of the different packages are available here:
- [immutadot 1.0](https://immutadot.zenika.com/api/immutadot)
- [immutadot-lodash 1.0](https://immutadot.zenika.com/api/immutadot-lodash)

Looking for older versions API documentation? Links are available [here](https://github.com/zenika-open-source/immutadot/blob/master/docs/README.md).

## Performances

A [simple benchmark](https://github.com/zenika-open-source/immutadot/tree/master/packages/immutadot-benchmark/src/updateTodos.spec.js) (freely inspired from one made by [mweststrate](https://github.com/mweststrate) for [immer](https://github.com/mweststrate/immer)) reveals that immutadot shows good results compared to other libraries.

:warning: The following results should be taken with caution, they may vary depending on the hardware, the JavaScript engine, and the kind of operations performed. This particular test updates 10% out of a list of todos items, and was ran with Node 9.8.0 on an Intel® Core™ i7-6560U CPU @ 2.20GHz.

```
Update small todos list (1000 items):
  ES2015 destructuring: ~17775ops/s (0.06ms/op) on 50000ops
  immutable 3.8.2 (w/o conversion to plain JS objects): ~6737ops/s (0.15ms/op) on 50000ops
  immutable 3.8.2 (w/ conversion to plain JS objects): ~109ops/s (9.17ms/op) on 3274ops
  immer 1.2.0 (proxy implementation w/o autofreeze): ~1132ops/s (0.88ms/op) on 34025ops
  immer 1.2.0 (ES5 implementation w/o autofreeze): ~521ops/s (1.92ms/op) on 15680ops
  qim 0.0.52: ~12042ops/s (0.08ms/op) on 50000ops
  immutadot 1.0.0: ~2351ops/s (0.43ms/op) on 50000ops
Update medium todos list (10000 items):
  ES2015 destructuring: ~1801ops/s (0.56ms/op) on 5000ops
  immutable 3.8.2 (w/o conversion to plain JS objects): ~630ops/s (1.59ms/op) on 5000ops
  immutable 3.8.2 (w/ conversion to plain JS objects): ~10ops/s (95.70ms/op) on 314ops
  immer 1.2.0 (proxy implementation w/o autofreeze): ~111ops/s (9.04ms/op) on 3319ops
  immer 1.2.0 (ES5 implementation w/o autofreeze): ~51ops/s (19.76ms/op) on 1519ops
  qim 0.0.52: ~1257ops/s (0.80ms/op) on 5000ops
  immutadot 1.0.0: ~234ops/s (4.28ms/op) on 5000ops
Update large todos list (100000 items):
  ES2015 destructuring: ~120ops/s (8.34ms/op) on 500ops
  immutable 3.8.2 (w/o conversion to plain JS objects): ~58ops/s (17.28ms/op) on 500ops
  immutable 3.8.2 (w/ conversion to plain JS objects): ~1ops/s (998.81ms/op) on 31ops
  immer 1.2.0 (proxy implementation w/o autofreeze): ~21ops/s (48.68ms/op) on 500ops
  immer 1.2.0 (ES5 implementation w/o autofreeze): ~4ops/s (264.16ms/op) on 114ops
  qim 0.0.52: ~91ops/s (11.01ms/op) on 500ops
  immutadot 1.0.0: ~21ops/s (48.22ms/op) on 500ops
```

## Immutability

In the last few years one of our biggest challenge has been to find an efficient way to detect changes in our data to determine when to re-render our interfaces.

An immutable object is an object that cannot be changed once created. It brings several benefits<sup>[1](#notes)</sup>:

- Data changes detection made simple (Shallow comparison)
- Memoization
- Improve rendering performances
- Explicit data changes
- Avoid side effects

## Our approach

### Concise

[ES2015+](https://mdn.io/JavaScript/Reference) new features are great to deal with arrays and objects. As data structures expand, the code you write to make data immutable gets bigger and less readable. immutadot uses the dot notation to address this issue.

### Interoperability

immutadot uses plain JavaScript objects so you can access your data using standard ways. Moreover, it lets you freely enjoy your favorite libraries.

### Exhaustive and yet extensible

immutadot comes with a large set of built-in utilities, mostly based on [ES2015+](https://mdn.io/JavaScript/Reference). You can also find a package called [immutadot-lodash](https://github.com/zenika-open-source/immutadot/tree/master/packages/immutadot-lodash) with some of [lodash](https://lodash.com/)'s utilities. You haven't found what you're looking for? Do it yourself with the [`convert`](https://immutadot.zenika.com/api/immutadot/1.0/core.html#.convert) feature.

### Learning curve

If you are already familiar with [ES2015+](https://mdn.io/JavaScript/Reference) and [lodash](https://lodash.com/) then you should be able to use immutadot quickly.

## Contributing

We want contributing to immutadot to be fun, enjoyable, and educational for anyone, and everyone.

### [Code of Conduct](https://github.com/zenika-open-source/immutadot/blob/master/.github/CODE_OF_CONDUCT.md)

In the interest of fostering an open and welcoming environment, we have adopted a Code of Conduct that we expect project participants to commit to. Please read the [full text](https://github.com/zenika-open-source/immutadot/blob/master/.github/CODE_OF_CONDUCT.md) so that you can understand what behavior will and will not be tolerated.

### [Contributing guide](https://github.com/zenika-open-source/immutadot/blob/master/.github/CONTRIBUTING.md)

If you are interested in contributing to immutadot, please read our [contributing guide](https://github.com/zenika-open-source/immutadot/blob/master/.github/CONTRIBUTING.md) to learn more about how to suggest bugfixes and improvements.

## License

immutadot is [MIT licensed](https://github.com/zenika-open-source/immutadot/blob/master/LICENSE.md).

## Notes

- [1](#immutability): You can find more information about immutability and its benefits in the following article http://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/
