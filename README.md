# tilelive-error

I am a tilelive source and sink that only returns errors.

## Usage

Return `TileliveError` instances to avoid repeating potential expensive and
ultimately error-prone actions.

```javascript
var TileliveError = require("tilelive-error");

var Source = function(uri, callback) {
  // doSomething is an expensive initalization operation
  // assumption: if an error is passed given the provided URI, it will *always*
  // be passed
  return doSomething(function(err, source) {
    if (err) {
      return new TileliveError(err, callback);
    }

    return callback(null, source);
  });
};
```
