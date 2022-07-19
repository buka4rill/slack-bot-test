const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    slackUserId: {
      type: String,
    },
    slackOrganizationId: {
      type: String,
    },
    slackWorkspaceId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model('User', UserSchema);
