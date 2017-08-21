//  this file isn't transpiled so we must use CommonJS and ES5

//  register Babel to tranpile before our test run.

require('babel-register')();

//  disable webpack features that Mocha doesn't understant.

require.extensions['.css'] = function() {};
