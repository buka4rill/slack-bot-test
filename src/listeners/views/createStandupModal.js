const User = require('../../models/User');

const createStandupModalCallback = async ({ ack, view, body, client }) => {
  ack();
  console.log('view state: ', view.state.values);
  // console.log('body: ', body);
  // console.log('client: ', client);
  // console.log('state: ', view.state.values[0].name_of_standup);
};

module.exports = { createStandupModalCallback };
