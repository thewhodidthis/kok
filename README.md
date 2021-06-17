## about

Produces exceptions for failing assertions. Includes ready-made checks for truthiness and equality. Combines with [tapeling](https://npm.im/tapeling) in [tapeless](https://npm.im/tapeless) for [TAP](https://testanything.org) formatted output.

## setup

Download from the _npm_ registry:

```sh
# Add to package.json
npm install likewise --save-dev
```

Source from an import map to use with Deno or in-browser directly:

```json
{
  "imports": {
    "likewise": "https://cdn.jsdelivr.net/npm/likewise@latest/main.js"
  }
}
```

## usage

The named export `reassert()` is available for creating own assertions. For example,

```js
import { reassert } from "likewise"

// Basic truthiness checking
const truthy = (v) => !!v
const falsy = (v) => !v

// Wrap with `reassert()` to throw an `Error` with
// the 'expected' value and an 'operator' key on failure,
// the 2nd and 3rd arguments respectively
const ok = reassert(truthy, true, "!!")
const notOk = reassert(falsy, false, "!")

// Clean run
console.assert(ok(true), "ok")
console.assert(notOk(0), "not ok")
```

Additionally, `ok()` and `equal()` plus counterparts are attached to `assert()` already wrapped. For example,

```js
import { assert } from "likewise"

const { ok, notOk, equal, notEqual } = assert

// Clean run
console.assert(ok(true), "ok")
console.assert(notOk(0), "not ok")

// Internally rely on `Object.is()`
console.assert(equal(null, null), "equal")
console.assert(notEqual(null, 0), "not equal")
```

## see also

- [tapeling](https://github.com/thewhodidthis/tapeling)
- [tapeless](https://github.com/thewhodidthis/tapeless)
