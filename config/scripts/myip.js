// ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1'

// ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1'

const shell = require('shelljs');
const ip = require('ip');

const command = [
  'ifconfig',
  'grep -Eo \'inet (addr:)?([0-9]*\\.){3}[0-9]*\'',
  'grep -Eo \'([0-9]*\\.){3}[0-9]*\'',
  'grep -v \'127.0.0.1\''
].join(' | ');

shell.exec(command);

// shell.exec('ifconfig', function(code, stdout, stderr) {
//   console.log('Exit code:', code);
//   console.log('Program output:', stdout);
//   console.log('Program stderr:', stderr);
// });
