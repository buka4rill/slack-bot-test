module.exports = () => {
  return {
    title: {
      type: "plain_text",
      text: "Channels and Members",
      emoji: true,
    },
    type: "modal",
    // View identifier
    callback_id: "view_1",
    blocks: [
      {
        type: "section",
        text: {
          type: "plain_text",
          text: "You updated the modal!",
        },
      },
      {
        type: "image",
        image_url: "https://media.giphy.com/media/SVZGEcYt7brkFUyU90/giphy.gif",
        alt_text: "Yay! The modal was updated",
      },
    ],
  };
};
