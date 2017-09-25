const shell = require('shelljs');
const path = require('./constants.js');

const command = [
  'node',
  path.BABEL_NODE,
  path.WEBPACK_DEV_SERVER,
  '--hot --inline --config',
  path.WEBPACK_CONFIG,
  '--color'
].join(' ');

shell.exec(command);
