# report-rejected-promises-to-sentry

> Installs global unhandled promise rejection event listener and sends errors to Sentry

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]

Will report unhandled rejected promises in your Node process to Sentry.

## Install and use

```sh
npm install -S report-rejected-promises-to-sentry
```

Then after getting [Raven client](https://github.com/getsentry/raven-node#readme)
instance just call the install function

```js
const reportRejections = require('report-rejected-promises-to-sentry')
const raven = require('raven')
const client = new raven.Client('https://<key>:<secret>@sentry.io/<project>')
reportRejections(client)

// somewhere in your code
Promise.reject(new Error('test exception'))
/*
  Sentry will show
  Error: Unhandled promise rejection
  Additional Data
    reason: test exception
    stack:
      Error: test exception
        full stack ...
*/
```

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2016


* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)


License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/report-rejected-promises-to-sentry/issues) on Github

## MIT License

Copyright (c) 2016 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/report-rejected-promises-to-sentry.svg?downloads=true
[npm-url]: https://npmjs.org/package/report-rejected-promises-to-sentry
[ci-image]: https://travis-ci.org/bahmutov/report-rejected-promises-to-sentry.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/report-rejected-promises-to-sentry
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
