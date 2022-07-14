const { appHomeOpenedCallback } = require("./appHomeOpened");

module.exports.register = (app) => {
  app.event("app_home_opened", appHomeOpenedCallback);
};
