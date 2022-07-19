const { Schema } = require('mongoose');

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

module.exports = mongoose.model('User', UserSchema);
