module.exports = () => {
  return {
    title: {
      type: "plain_text",
      text: "Create Standup",
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: "Next",
      emoji: true,
    },
    type: "modal",
    close: {
      type: "plain_text",
      text: "Cancel",
      emoji: true,
    },
    blocks: [
      {
        type: "divider",
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          placeholder: {
            type: "plain_text",
            text: "Name of standup",
            emoji: true,
          },
          action_id: "plain_text_input-action",
        },
        label: {
          type: "plain_text",
          text: "Name",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "timepicker",
          placeholder: {
            type: "plain_text",
            text: "Select when to send reminder",
            emoji: true,
          },
          action_id: "timepicker-action",
        },
        label: {
          type: "plain_text",
          text: "Time",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "checkboxes",
          options: [
            {
              text: {
                type: "plain_text",
                text: "Monday",
                emoji: true,
              },
              value: "value-0",
            },
            {
              text: {
                type: "plain_text",
                text: "Tuesday",
                emoji: true,
              },
              value: "value-1",
            },
            {
              text: {
                type: "plain_text",
                text: "Wednesday",
                emoji: true,
              },
              value: "value-2",
            },
          ],
          action_id: "checkboxes-action",
        },
        label: {
          type: "plain_text",
          text: "Days of the week",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "static_select",
          placeholder: {
            type: "plain_text",
            text: "How many times do you want a reminder?",
            emoji: true,
          },
          options: [
            {
              text: {
                type: "plain_text",
                text: "Once",
                emoji: true,
              },
              value: "value-0",
            },
            {
              text: {
                type: "plain_text",
                text: "Twice",
                emoji: true,
              },
              value: "value-1",
            },
            {
              text: {
                type: "plain_text",
                text: "Three times",
                emoji: true,
              },
              value: "value-2",
            },
          ],
          action_id: "static_select-action",
        },
        label: {
          type: "plain_text",
          text: "Frequency",
          emoji: true,
        },
      },
      {
        type: "input",
        element: {
          type: "static_select",
          placeholder: {
            type: "plain_text",
            text: "Select time interval",
            emoji: true,
          },
          options: [
            {
              text: {
                type: "plain_text",
                text: "5 mins",
                emoji: true,
              },
              value: "value-0",
            },
            {
              text: {
                type: "plain_text",
                text: "10 mins",
                emoji: true,
              },
              value: "value-1",
            },
            {
              text: {
                type: "plain_text",
                text: "15 mins",
                emoji: true,
              },
              value: "value-2",
            },
          ],
          action_id: "static_select-action",
        },
        label: {
          type: "plain_text",
          text: "Intevals",
          emoji: true,
        },
      },
    ],
  };
};
