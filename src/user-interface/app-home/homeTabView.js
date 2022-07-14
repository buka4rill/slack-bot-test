module.exports = () => {
  const homeTab = {
    // Home tabs must be enabled in your app configuration page under "App Home"
    type: "home",
    callback_id: "open-home",
    private_metadata: "view_home",
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Hello there, welcome to Ayabot",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: ":spiral_calendar_pad: Your follow-ups",
        },
      },
      {
        type: "divider",
      },
      {
        type: "actions",
        block_id: "standup_response_actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Add Response",
              emoji: true,
            },
            style: "primary",
            value: "add_response",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Not working today",
              emoji: true,
            },
            style: "danger",
            value: "not_working_today",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Use Previous Response",
              emoji: true,
            },
            value: "not_working_today",
          },
        ],
      },
      {
        type: "divider",
      },
      {
        type: "actions",
        block_id: "create_follow_up_and_dashboard",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: ":pencil2: Create New Follow-up",
              emoji: true,
            },
            value: "app_home_nav_create_new_follow_up",
            action_id: "app_home_nav_create_new_follow_up",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              text: ":desktop_computer: Dashboard",
              emoji: true,
            },
            value: "dashboard",
            url: "https://google.com",
          },
        ],
      },
    ],
  };

  return homeTab;
};
