const { addQuestions } = require('../../user-interface/modals');

const nextToAddQuestionCallback = async ({ ack, body, client, logger }) => {
  try {
    // Acknowledge the button request
    await ack();
    const result = await client.views.update({
      // Pass the view_id
      view_id: body.view.id,
      // trigger_id: body.trigger_id,
      // Pass the current hash to avoid race conditions
      hash: body.view.hash,

      // View payload with updated blocks
      view: addQuestions(),
    });
    logger.info(result);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  nextToAddQuestionCallback,
};
