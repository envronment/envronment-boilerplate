const shell = require('shelljs');
const path = require('./constants.js');

const command = [
  'node',
  path.BABEL_NODE,
  path.WEBPACK,
  '--config',
  path.WEBPACK_CONFIG,
  '--color'
].join(' ');

shell.exec(command);
