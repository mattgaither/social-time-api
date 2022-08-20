const { Schema, model } = require('mongoose');
const dateFormat = require('utils/dateFormat.js);

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtValue) => dateFormat(createdAtValue)
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      ReactionSchema
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id : false,
  }
);

const ReactionSchema = new Schema(
  {
    reactionID: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtValue) => dateFormat(createdAtValue),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  },
);

ThoughtSchema.virtual("reactionCount").get(function() {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;