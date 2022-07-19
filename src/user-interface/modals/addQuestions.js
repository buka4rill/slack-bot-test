module.exports = () => {
  return {
    type: 'modal',
    private_metadata: 'create_standup',
    callback_id: 'create_standup_3', // View identifier
    title: {
      type: 'plain_text',
      text: 'Add questions',
      emoji: true,
    },
    submit: {
      type: 'plain_text',
      text: 'Create Follow Up',
      emoji: true,
    },
    close: {
      type: 'plain_text',
      text: 'Back',
      emoji: true,
    },
    blocks: [
      {
        type: 'divider',
      },
      // Question input
      {
        type: 'input',
        element: {
          type: 'plain_text_input',
          placeholder: {
            type: 'plain_text',
            text: 'Add your question',
            emoji: true,
          },
          action_id: 'question_1',
        },
        label: {
          type: 'plain_text',
          text: 'Name',
          emoji: true,
        },
      },
      // Question input
      {
        type: 'input',
        element: {
          type: 'plain_text_input',
          placeholder: {
            type: 'plain_text',
            text: 'Add your question',
            emoji: true,
          },
          action_id: 'question_2',
        },
        label: {
          type: 'plain_text',
          text: 'Name',
          emoji: true,
        },
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Add Question',
              emoji: true,
            },
            value: 'add_question',
            action_id: 'add_question',
          },
        ],
      },
      // action "Next" button
    ],
  };
};
