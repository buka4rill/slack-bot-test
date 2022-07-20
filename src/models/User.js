const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    slackUserId: {
      type: String,
      unique: true,
    },
    // slackOrganizationId: {
    //   type: String,
    // },
    slackWorkspaceId: {
      type: String,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    name: {
      type: String,
    },
    username: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model('User', UserSchema);
