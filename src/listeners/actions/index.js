const {
  appHomeNavCreateNewFollowUp,
} = require("./blockAppHomeNavCreateNewFollowUp");

module.exports.register = (app) => {
  app.action("app_home_nav_create_new_follow_up", appHomeNavCreateNewFollowUp);
};
