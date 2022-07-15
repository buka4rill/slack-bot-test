const {
  appHomeNavCreateNewFollowUp,
} = require("./blockAppHomeNavCreateNewFollowUp");
const {
  nextToChannelAndMembersModal,
} = require("./blockAppHomeNavCreateNewFollowUpChannelAndMembers.js");

module.exports.register = (app) => {
  app.action("app_home_nav_create_new_follow_up", appHomeNavCreateNewFollowUp);
  app.action("next_to_channel_and_members_modal", nextToChannelAndMembersModal);
};
