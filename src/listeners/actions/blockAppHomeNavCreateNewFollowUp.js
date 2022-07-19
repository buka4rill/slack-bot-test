const { newFollowUp } = require('../../user-interface/modals');

const appHomeNavCreateNewFollowUpCallback = async ({
  body,
  ack,
  client,
  logger,
}) => {
  try {
    await ack();
    const result = await client.views.open({
      trigger_id: body.trigger_id,
      view: newFollowUp(),
    });
    logger.info(result);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  appHomeNavCreateNewFollowUpCallback,
};
