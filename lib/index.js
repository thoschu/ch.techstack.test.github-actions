const Fs = require('fs'),
  R = require('ramda');

module.exports = {
  do: (option, input) => {
    console.log(option);
    return input;
  },
  run: (options, file) => {
    console.log(options);
    return file;
  }
};
