const { Schema, model } = require('mongoose');

const QuestionsSchema = new Schema({ question: String });
const DoWeekSchema = new Schema({ days: { type: String, required: true } });
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
    daysOfTheWeek: [
      {
        type: String,
        required: true,
      },
    ],
    reminder: {
      type: String,
      required: true,
    },
    interval: {
      type: String,
    },
    channel: {
      type: String,
      required: true,
    },
    // enableThreadMessages: {
    //   type: String,
    //   default: 'no',
    // },
    // syncAllMembers: {
    //   type: Boolean,
    // },
    channelMembers: {
      type: [String],
      required: true,
    },
    questions: {
      type: [String],
    },
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model('Followup', FollowupSchema);
