const { newFollowUp } = require('../../user-interface/modals');

const appHomeNavCreateNewFollowUpCallback = async ({
  body,
  ack,
  client,
  logger,
}) => {
  // Get all users from slack API
  const allUsers = await client.users.list();
  usersThatAreNotBots = allUsers.members.filter(
    (user) => user.is_bot === false && user.name !== 'slackbot'
  );

  // Get all channels in the workspace
  const channelsObj = await client.conversations.list();
  const channels = channelsObj.channels;
  console.log('chanels: ', channels);
  try {
    await ack();
    const result = await client.views.open({
      trigger_id: body.trigger_id,
      view: newFollowUp(usersThatAreNotBots, channels),
    });
    logger.info(result);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  appHomeNavCreateNewFollowUpCallback,
};
