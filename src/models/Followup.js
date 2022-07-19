const { Schema, model } = require('mongoose');

const QuestionsSchema = new Schema({ question: String });
const FollowupSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    time: {
      type: String,
      required: true,
    },
    days_of_the_week: {
      type: String,
      required: true,
    },
    reminder: {
      type: String,
      required: true,
    },
    intervals: {
      type: String,
    },
    channels: {
      type: String,
      required: true,
    },
    enable_thread_messages: {
      type: Boolean,
    },
    sync_all_members: {
      type: Boolean,
    },
    channel_members: {
      type: Strings,
      required: true,
    },
    questions: [QuestionsSchema],
  },
  { timestamps: true }
);

module.exports = model('Followup', FollowupSchema);
