# always-tail2

Node.js module for continuously tailing a file.

It differs from the `always-tail` module in that it tails from the end of a
file rather than the beginning of the file by default. It also includes
bugfixes and updates as the `always-tail` module appears to be no longer
maintained.

It differs from other `tail` modules in that it survives truncates,
file rollovers (e.g. `mv /var/log/test /var/log/test.1`), and unlink.

It does this by monitoring the filename, and when the inode changes, 
it will continue to read to the end of the existing file descriptor, then 
automatically read from the newly created file with the same name.

It emits a 'line' event when a new line is read. 

## Installation

`npm install always-tail2`

## Example

```js
var Tail = require('always-tail2');
var fs = require('fs');
var filename = "/tmp/testlog";

if (!fs.existsSync(filename)) fs.writeFileSync(filename, "");

var tail = new Tail(filename, '\n');

tail.on('line', function(data) {
  console.log("got line:", data);
});


tail.on('error', function(data) {
  console.log("error:", data);
});

tail.watch();

// to unwatch and close all file descriptors, tail.unwatch();
```

## Usage 

```js
var Tail = require('always-tail2');
var tail = new Tail(filename, separator, options); 
```

- `filename` - filename to monitor

- `separator` - (default: \n) optional separator for each line

- `options.interval` - (default: 1000) optional interval, in milliseconds, to
  check for changes

- `options.start` - optional start byte to start reading from

- `options.startAtEnd` - (default: true) set to true to start from end of file
  or false to start from beginning of file; ignored if `options.start` is set

## Credits

Code is forked from the node-tail module (https://github.com/jandre/always-tail)

## License

MIT 
