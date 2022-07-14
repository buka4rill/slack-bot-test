const { newFollowUp } = require("../../user-interface/modals");

const appHomeNavCreateNewFollowUp = async ({ body, ack, client }) => {
  try {
    await ack();
    await client.views.open({
      trigger_id: body.trigger_id,
      view: newFollowUp(),
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  appHomeNavCreateNewFollowUp,
};
