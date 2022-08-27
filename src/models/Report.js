const { Schema, model } = require('mongoose');

const ReportSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    client: {
      type: String,
      required: true,
    },
    project: {
      type: String,
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    start_date: {
      type: String,
      required: true,
    },
    start_time: {
      type: String,
      required: true,
    },
    start_time: {
      type: String,
      required: true,
    },
    end_date: {
      type: String,
      required: true,
    },
    end_time: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    file_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model('Report', ReportSchema);
