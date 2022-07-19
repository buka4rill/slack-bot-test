const {
  appHomeNavCreateNewFollowUpCallback,
} = require('./blockAppHomeNavCreateNewFollowUp');
const {
  nextToChannelAndMembersModalCallback,
} = require('./blockAppHomeNavCreateNewFollowUpChannelAndMembers.js');
const {
  nextToAddQuestionCallback,
} = require('./blockAppHomeNavCreateNewFollowUpNextToAddQuestion.js');

module.exports.register = (app) => {
  app.action(
    'app_home_nav_create_new_follow_up',
    appHomeNavCreateNewFollowUpCallback
  );
  // app.action(
  //   'next_to_channel_and_members_modal',
  //   nextToChannelAndMembersModalCallback
  // );
  // app.action('next_to_add_questions', nextToAddQuestionCallback);
};
