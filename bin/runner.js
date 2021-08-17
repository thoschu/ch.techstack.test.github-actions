#!/usr/bin/env node

const R = require('ramda'),
  RR = require('../lib/index');

(argumentsArr => {
    console.dir(argumentsArr);
    RR.do(true, 77);
  } catch(err) {
    process.stderr.write(err);
  }
})(R.prop('argv', process));

