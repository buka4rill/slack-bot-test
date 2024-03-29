// const { App, LogLevel } = require("@slack/bolt");
require('dotenv').config();
const { App } = require('@slack/bolt');
const axios = require('axios');
const { registerListeners } = require('./src/listeners');
const mongoose = require('mongoose');
const FollowupModel = require('./src/models/Followup');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  // socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  // Socket Mode doesn't listen on a port, but in case you want your app to respond to OAuth,
  // you still need to listen on some port!
  port: process.env.PORT || 3000,
});

// Send the app object to different registered slack app listeners
registerListeners(app);

// console.log(app);

(async () => {
  // Initialise database
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: 'Ayabot-database',
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    })
    .then(() => {
      console.log('⚡️⚡️ Connected to MongoDB!!');
    })
    .catch((err) => {
      console.error('error connecting to MongoDB', err.message);
    });

  // Start your app
  await app.start();

  console.log('⚡️ Bolt app is running...');

  // const savedFollowups = await FollowupModel.find({});

  // for (let followup of savedFollowups) {
  //   // for each followup, get time, send reminders to users
  //   try {
  //     axios
  //       .post(
  //         'https://slack.com/api/reminders.add',
  //         {
  //           // token: process.env.SLACK_BOT_TOKEN,
  //           time: 'at 04:21pm',
  //           text: 'eat food',
  //           // recurrence: {
  //           //   frequency: 'daily',
  //           // },
  //           user: 'U03NKU61P42',
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${process.env.SLACK_USER_OAUTH_TOKEN}`,
  //           },
  //         }
  //       )
  //       .then((res) => console.log(res.data));
  //     // .catch((err) => console.err('err: ', err));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  //   // .then((response) => {
  //   //   console.log(response.data);
  //   // });
  //   // await app.client.reminders.add({
  //   //   time: 'at 01:38pm',
  //   //   text: 'eat food',
  //   //   recurrence: {
  //   //     frequency: 'daily',
  //   //   },
  //   //   user: 'U03NKU61P42',
  //   // });
  // }
  // await app.client.reminders.add()
})();

// app.event('hello', async ({ event, client }) => {
//   console.log('hello');
//   try {
//     const savedFollowups = await FollowupModel.find({});

//     for (let followup of savedFollowups) {
//       console.log('right here yeah!');
//       // console.log('here now');
//       // for each followup, get time, send reminders to users
//       await client.reminders.add({
//         time: 'at 01:38pm',
//         text: 'eat food',
//         recurrence: {
//           frequency: 'daily',
//         },
//         user: 'U03NKU61P42',
//       });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// });

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
