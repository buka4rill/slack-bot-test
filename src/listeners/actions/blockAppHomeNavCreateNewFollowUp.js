const { newFollowUp } = require('../../user-interface/modals');

const appHomeNavCreateNewFollowUpCallback = async ({
  body,
  ack,
  client,
  logger,
}) => {
  const allUsers = await client.users.list();
  usersThatAreNotBots = allUsers.members.filter(
    (user) => user.is_bot === false && user.name !== 'slackbot'
  );

  try {
    await ack();
    const result = await client.views.open({
      trigger_id: body.trigger_id,
      view: newFollowUp(usersThatAreNotBots),
    });
    logger.info(result);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  appHomeNavCreateNewFollowUpCallback,
};
