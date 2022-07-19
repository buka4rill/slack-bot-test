const eventsListener = require('./events');
const actionsListener = require('./actions');
const viewsListener = require('./views');

module.exports.registerListeners = (app) => {
  eventsListener.register(app);
  actionsListener.register(app);
  viewsListener.register(app);
};
