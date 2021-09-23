'use strict';

const getRunCmdEnv = require('./utils/getRunCmdEnv');

function runCmd(cmd, _args, fn) {
  const args = _args || [];
  const runner = require('child_process').spawn(process.platform === "win32" ? "npm.cmd" : "npm", ['install'], {
    // keep color
    stdio: 'inherit',
    env: getRunCmdEnv(),
  });

  runner.on('close', code => {
    if (fn) {
      fn(code);
    }
  });
}

module.exports = runCmd;
