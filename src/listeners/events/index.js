const { appHomeOpenedCallback } = require('./appHomeOpened');
const { fileSharedCallback } = require('./fileSharedCallback');

module.exports.register = (app) => {
  app.event('app_home_opened', appHomeOpenedCallback);
  app.event('file_shared', fileSharedCallback);
};
