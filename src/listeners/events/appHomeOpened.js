const { homeTabView } = require('../../user-interface/app-home');

const appHomeOpenedCallback = async ({ client, event, body }) => {
  // console.log("event: ", event);
  // console.log("body: ", body);
  if (event.tab !== 'home') {
    // Ignore the `app_home_opened` event for everything
    // except home
    return;
  }

  try {
    await client.views.publish({
      user_id: event.user,
      view: homeTabView(),
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { appHomeOpenedCallback };
