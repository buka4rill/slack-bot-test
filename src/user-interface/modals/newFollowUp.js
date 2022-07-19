module.exports = () => {
  return {
    type: 'modal',
    private_metadata: 'create_standup',
    callback_id: 'create_standup_modal', // View identifier
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
          type: 'multi_static_select',
          placeholder: {
            type: 'plain_text',
            text: 'Select days for reminder',
            emoji: true,
          },
          options: [
            {
              text: {
                type: 'plain_text',
                text: 'Monday',
              },
              value: 'monday',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Tuesday',
              },
              value: 'tuesday',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Wednesday',
              },
              value: 'wednesday',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Thursday',
              },
              value: 'thursday',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Friday',
              },
              value: 'friday',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Saturday',
              },
              value: 'saturday',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Sunday',
              },
              value: 'sunday',
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
                text: 'No reminder',
                emoji: true,
              },
              value: 'no reminder',
            },
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
              value: 'twice',
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
          action_id: 'reminder',
        },
        label: {
          type: 'plain_text',
          text: 'Reminder',
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
                text: '15 mins',
                emoji: true,
              },
              value: '15',
            },
            {
              text: {
                type: 'plain_text',
                text: '30 mins',
                emoji: true,
              },
              value: '30',
            },
            {
              text: {
                type: 'plain_text',
                text: '60 mins',
                emoji: true,
              },
              value: '60',
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
      // {
      //   type: 'actions',
      //   elements: [
      //     {
      //       type: 'button',
      //       text: {
      //         type: 'plain_text',
      //         text: 'Next: Channels & Members :arrow_right:',
      //         emoji: true,
      //       },
      //       value: 'next_to_channel_and_members_modal',
      //       action_id: 'next_to_channel_and_members_modal',
      //     },
      //   ],
      // },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: ':ghost: *Channels & Members*',
        },
      },
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
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: ':ghost: *Add questions*',
        },
      },
      {
        type: 'divider',
      },
      // Question Input
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
      // Add Question Button
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
    ],
  };
};
