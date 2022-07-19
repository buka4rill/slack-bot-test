module.exports = () => {
  return {
    title: {
      type: 'plain_text',
      text: 'Channels and Members',
      emoji: true,
    },
    type: 'modal',
    callback_id: 'create_standup_2', // View identifier
    private_metadata: 'create_standup',
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
      {
        type: 'input',
        element: {
          type: 'multi_static_select',
          placeholder: {
            type: 'plain_text',
            text: 'Add channels',
            emoji: true,
          },
          options: [
            {
              text: {
                type: 'plain_text',
                text: 'Channel 1',
              },
              value: 'value-0',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Channel 2',
              },
              value: 'value-1',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Channel 3',
              },
              value: 'value-2',
            },
          ],
          action_id: 'channels',
        },

        label: {
          type: 'plain_text',
          text: 'Channels',
          emoji: true,
        },
      },
      {
        type: 'input',
        element: {
          type: 'radio_buttons',
          options: [
            {
              text: {
                type: 'plain_text',
                text: 'No',
                emoji: true,
              },
              value: 'no',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Yes',
                emoji: true,
              },
              value: 'yes',
            },
          ],
          action_id: 'enable_threads',
        },
        label: {
          type: 'plain_text',
          text: 'Do you want to enable thread messages',
          emoji: true,
        },
      },
      {
        type: 'input',
        element: {
          type: 'radio_buttons',
          options: [
            {
              text: {
                type: 'plain_text',
                text: 'No',
                emoji: true,
              },
              value: 'no',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Yes',
                emoji: true,
              },
              value: 'yes',
            },
          ],
          action_id: 'sync_members',
        },
        label: {
          type: 'plain_text',
          text: 'Sync all members of the channel',
          emoji: true,
        },
      },
      {
        type: 'input',
        element: {
          type: 'multi_static_select',
          placeholder: {
            type: 'plain_text',
            text: 'Add channel Members',
            emoji: true,
          },
          options: [
            {
              text: {
                type: 'plain_text',
                text: 'Peter',
              },
              value: 'value-0',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Paul',
              },
              value: 'value-1',
            },
            {
              text: {
                type: 'plain_text',
                text: 'John',
              },
              value: 'value-2',
            },
          ],
          action_id: 'channel_members',
        },
        label: {
          type: 'plain_text',
          text: 'Channel members',
          emoji: true,
        },
      },
      // action "Next" button
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Next: Add Questions :arrow_right:',
              emoji: true,
            },
            value: 'next_to_add_questions',
            action_id: 'next_to_add_questions',
          },
        ],
      },
    ],
  };
};
