const { createStandupModalCallback } = require('./createStandupModal');

module.exports.register = (app) => {
  app.view('create_standup_modal', createStandupModalCallback);
};
