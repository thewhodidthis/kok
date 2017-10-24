> Browser friendly assertification, adapted from [tapjs/tapsert](https://github.com/tapjs/tapsert)

### Setup
```sh
# Fetch latest from github
npm i thewhodidthis/likewise
```

### Usage
```js
import { assert } from 'likewise'

const { ok, notOk } = assert

// Clean run
console.assert(ok(true), 'ok')
console.assert(notOk(0), 'not ok')
```
