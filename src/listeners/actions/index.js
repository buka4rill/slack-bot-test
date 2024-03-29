const {
  appHomeNavCreateNewFollowUpCallback,
} = require('./blockAppHomeNavCreateNewFollowUp');
const { createNewInput } = require('./newInput');
// const {
//   nextToChannelAndMembersModalCallback,
// } = require('./blockAppHomeNavCreateNewFollowUpChannelAndMembers.js');
// const {
//   nextToAddQuestionCallback,
// } = require('./blockAppHomeNavCreateNewFollowUpNextToAddQuestion.js');

module.exports.register = (app) => {
  // Action listener for the create followup modal
  app.action(
    'app_home_nav_create_new_follow_up',
    appHomeNavCreateNewFollowUpCallback
  );
  // app.action(
  //   'next_to_channel_and_members_modal',
  //   nextToChannelAndMembersModalCallback
  // );
  // app.action('next_to_add_questions', nextToAddQuestionCallback);
  app.action('add_question', createNewInput);
};
