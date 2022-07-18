// const { App, LogLevel } = require("@slack/bolt");
require('dotenv').config();
const { App } = require('@slack/bolt');
const { registerListeners } = require('./src/listeners');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  // socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  // Socket Mode doesn't listen on a port, but in case you want your app to respond to OAuth,
  // you still need to listen on some port!
  port: process.env.PORT || 3000,
});

// Ex. 1
// Subscribe to 'app_mention' event
// app.event("app_mention", async ({ event, client }) => {
//   try {
//     const result = await client.chat.postMessage({
//       channel: event.channel,
//       text: `Thanks for the mention, <@${event.user}>`,
//     });
//   } catch (error) {
//     console.error(error);
//   }
// });

registerListeners(app);

(async () => {
  // Add db here...

  // Start your app
  await app.start();

  console.log('⚡️ Bolt app is running!');
})();

// Ex. 2
// Subscribe to 'message.channels' events
// app.message("hey", async ({ message, say }) => {
//   // say() sends a message to the channel where the event was triggered
//   // no need to directly use 'chat.postMessage', no need to include token
//   try {
//     await say({
//       // prettier-ignore
//       "blocks": [
//         {
//           "type": "section",
//           "text": {
//             "type": "mrkdwn",
//             "text": `Thanks for the mention <@${message.user}! Click my fancy button`,
//           },
//           "accessory": {
//             "type": "button",
//             "text": {
//               "type": "plain_text",
//               "text": "Button",
//               "emoji": true,
//             },
//             "value": "click_me_123",
//             "action_id": "first_button",
//           },
//         },
//       ],
//     });
//   } catch (error) {
//     console.error(error);
//   }
// });
