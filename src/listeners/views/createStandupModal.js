const UserModel = require('../../models/User');
const FollowupModel = require('../../models/Followup');
const { standupCreated } = require('../../user-interface/modals');

const createStandupModalCallback = async ({
  ack,
  view,
  body,
  client,
  event,
}) => {
  // console.log('view state: ', view.state.values);
  // console.log('body: ', body);
  console.log('event: ', event);

  // Get admin user
  const creator = await UserModel.findOne({
    slackUserId: body.user.id,
    slackWorkspaceId: body.team.id,
    isAdmin: true,
  });

  if (creator) {
    console.log('Creator exists already');
  } else {
    // Create User record
    const userObject = {
      slackUserId: body.user.id,
      slackWorkspaceId: body.team.id,
      name: body.user.name,
      username: body.user.username,
      isAdmin: true,
    };
    await UserModel.create(userObject);

    console.log('User created');
  }

  const standupName = view.state.values.name_of_standup.name_of_standup;
  const standupTime = view.state.values.standup_time.standup_time;
  const daysOfTheWeek =
    view.state.values.days_of_the_week.days_of_the_week.selected_options; // array
  const reminder = view.state.values.reminder.reminder.selected_option;
  const interval = view.state.values.interval.interval.selected_option;
  const channels = view.state.values.channels.channels.selected_options; // array
  const enableThreads =
    view.state.values.enable_threads.enable_threads.selected_option;
  const syncMembers =
    view.state.values.sync_members.sync_members.selected_option;
  const channelMembers =
    view.state.values.channel_members.channel_members.selected_options;
  const question1 = view.state.values.question_1.question_1;
  const question2 = view.state.values.question_2.question_2;
  // console.log('reminder: ', reminder);
  // console.log('days of the week: ', daysOfTheWeek);
  // console.log('channels: ', channels);
  // console.log('channel members: ', channelMembers);

  // Form validation & error handling
  if (!standupName === null) {
    await ack({
      response_action: 'errors',
      errors: {
        name_of_standup: 'Name of standup cannot be empty',
      },
    });
    return;
  } else if (standupTime === null) {
    await ack({
      response_action: 'errors',
      errors: {
        standup_time: 'Please select standup time',
      },
    });
    return;
  } else if (!reminder) {
    await ack({
      response_action: 'errors',
      errors: {
        reminder: 'Select a reminder',
      },
    });
    return;
  } else if (reminder !== 'no reminder' && !interval) {
    await ack({
      response_action: 'errors',
      errors: {
        interval: 'Select reminder interval',
      },
    });
    return;
  } else if (!question1) {
    await ack({
      response_action: 'errors',
      errors: {
        question_1: 'Ask a question',
      },
    });
    return;
  }

  // Create array instances for Array inputs
  let daysArr = [];
  daysOfTheWeek.map((day) => daysArr.push(day.value));
  let channelsArr = [];
  channels.map((channel) => channelsArr.push(channel.value));
  let channelMembersArr = [];
  channelMembers.map((member) => channelMembersArr.push(member.value));

  // If there are any questions...
  const questionsArr = [];
  if (question1) {
    questionsArr.push(question1.value);
  }
  if (!question2) {
    return;
  }
  questionsArr.push(question2.value);

  try {
    // Save Followup to database
    const followupObject = {
      name: standupName.value,
      time: standupTime.selected_time,
      daysOfTheWeek: daysArr,
      reminder: reminder.value,
      interval: interval.value,
      channels: channelsArr,
      // enableThreadMessages: enableThreads.value,
      channelMembers: channelMembersArr,
      questions: questionsArr,
      creatorId: creator._id,
    };
    await FollowupModel.create(followupObject);

    // Acknowledge state and update
    await ack();
    // await ack({
    //   response_action: 'update',
    //   view: standupCreated
    // });

    if (creator.slackUserId === body.user.id) {
      await client.chat.postMessage({
        channel: event.channel,
        text: `<@${body.user.username} created a new standup `,
      });
    }
  } catch (err) {
    await ack();
    console.error(err);
  }
};

module.exports = { createStandupModalCallback };
