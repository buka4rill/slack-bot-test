module.exports = (standupTitle) => {
  return {
    type: 'modal',
    callback_id: 'standup_created_modal',
    private_metadata: 'standup_created',
    title: {
      type: 'plain_text',
      text: 'Standup created',
      emoji: true,
    },
    blocks: [
      {
        type: 'divider',
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `${standupTitle} created`,
        },
      },
    ],
  };
};
