const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  icon: {
    type: String,
  },
  subTopic: [
    {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      body: {
        type: String,
      },
      links: [
        {
          url: {
            type: String,
          },
        },
      ],
      fileUrl: {
        type: String,
      },
      completed: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: "users",
          },
        },
      ],
    },
  ],
});

module.exports = Topic = mongoose.model("topic", TopicSchema);
