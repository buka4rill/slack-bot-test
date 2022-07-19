const {
  appHomeNavCreateNewFollowUp,
} = require('./blockAppHomeNavCreateNewFollowUp');
const {
  nextToChannelAndMembersModal,
} = require('./blockAppHomeNavCreateNewFollowUpChannelAndMembers.js');
const {
  nextToAddQuestion,
} = require('./blockAppHomeNavCreateNewFollowUpNextToAddQuestion.js');

module.exports.register = (app) => {
  app.action('app_home_nav_create_new_follow_up', appHomeNavCreateNewFollowUp);
  app.action('next_to_channel_and_members_modal', nextToChannelAndMembersModal);
  app.action('next_to_add_questions', nextToAddQuestion);
};
