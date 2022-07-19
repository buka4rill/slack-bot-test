module.exports = () => {
  return {
    type: 'modal',
    private_metadata: 'create_standup',
    callback_id: 'create_standup_1', // View identifier
    title: {
      type: 'plain_text',
      text: 'Create Standup',
      emoji: true,
    },
    submit: {
      type: 'plain_text',
      text: 'Create Follow Up',
      emoji: true,
    },
    close: {
      type: 'plain_text',
      text: 'Cancel',
      emoji: true,
    },
    blocks: [
      {
        type: 'divider',
      },
      // Name input
      {
        type: 'input',
        element: {
          type: 'plain_text_input',
          placeholder: {
            type: 'plain_text',
            text: 'Name of standup',
            emoji: true,
          },
          action_id: 'name_of_standup',
        },
        label: {
          type: 'plain_text',
          text: 'Name',
          emoji: true,
        },
      },
      // Time input
      {
        type: 'input',
        element: {
          type: 'timepicker',
          placeholder: {
            type: 'plain_text',
            text: 'Select when to send reminder',
            emoji: true,
          },
          action_id: 'standup_time',
        },
        label: {
          type: 'plain_text',
          text: 'Time',
          emoji: true,
        },
      },
      // Days of the week input
      {
        type: 'input',
        element: {
          type: 'checkboxes',
          options: [
            {
              text: {
                type: 'plain_text',
                text: 'Monday',
                emoji: true,
              },
              value: 'monday',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Tuesday',
                emoji: true,
              },
              value: 'tuesday',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Wednesday',
                emoji: true,
              },
              value: 'wednesday',
            },
          ],
          action_id: 'days_of_the_week',
        },
        label: {
          type: 'plain_text',
          text: 'Days of the week',
          emoji: true,
        },
      },
      // Reminder input
      {
        type: 'input',
        element: {
          type: 'static_select',
          placeholder: {
            type: 'plain_text',
            text: 'How many times do you want a reminder?',
            emoji: true,
          },
          options: [
            {
              text: {
                type: 'plain_text',
                text: 'Once',
                emoji: true,
              },
              value: 'once',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Twice',
                emoji: true,
              },
              value: 'value-1',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Thrice',
                emoji: true,
              },
              value: 'thrice',
            },
          ],
          action_id: 'frequency',
        },
        label: {
          type: 'plain_text',
          text: 'Frequency',
          emoji: true,
        },
      },
      // Interval input
      {
        type: 'input',
        element: {
          type: 'static_select',
          placeholder: {
            type: 'plain_text',
            text: 'Select time interval',
            emoji: true,
          },
          options: [
            {
              text: {
                type: 'plain_text',
                text: '5 mins',
                emoji: true,
              },
              value: '5',
            },
            {
              text: {
                type: 'plain_text',
                text: '10 mins',
                emoji: true,
              },
              value: '10',
            },
            {
              text: {
                type: 'plain_text',
                text: '15 mins',
                emoji: true,
              },
              value: '15',
            },
          ],
          action_id: 'interval',
        },
        label: {
          type: 'plain_text',
          text: 'Intevals',
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
              text: 'Next: Channels & Members :arrow_right:',
              emoji: true,
            },
            value: 'next_to_channel_and_members_modal',
            action_id: 'next_to_channel_and_members_modal',
          },
        ],
      },
    ],
  };
};
