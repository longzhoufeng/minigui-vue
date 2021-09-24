const minigui = require('./components');
const req = require.context('./components', true, /^\.\/locale-provider\/(?!__tests__).+_.+\.js$/);

minigui.locales = {};

req.keys().forEach(mod => {
  const match = mod.match(/\/([^/]+).js$/);
  minigui.locales[match[1]] = req(mod).default;
});

module.exports = minigui;
