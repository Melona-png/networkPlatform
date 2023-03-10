const {Schema, model, Types} = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// reactionSchema
const reactionSchema = new Schema({
    
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
      username: {
        type: String,
        required: true,
    },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal),
    },
    },
    {
      toJSON: {
        getters: true,
    },
    });

// thoughtSchema
const thoughtSchema = new Schema({

      thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
    },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal),
    },
      username: {
        type: String,
        required: true,
    },
      reactions: [reactionSchema],
    },
    {
      toJSON: {
        virtuals: true,
        getters: true,
    },
      id: false,
    });


//   reactionCount- retrieves the length of the thought's reactions array field on query.
  
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  });
  
const Thought = model("Thought", thoughtSchema);
  
module.exports = Thought;