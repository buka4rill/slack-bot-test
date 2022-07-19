const createStandupModalCallback = async ({ ack, view, body, client }) => {
  ack();
  console.log('view state: ', view.state.values);
  // console.log('body: ', body);
  // console.log('client: ', client);
};

module.exports = { createStandupModalCallback };
