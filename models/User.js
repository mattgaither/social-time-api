const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username : {
    type: String,
    unique : true,
    required: true,
    trimmed: true
  },
  email : {
    type: String,
    required: true,
    unique: true,
    // Matches a valid email address using Mongoose format
  },
  thoughts : [
    {
    type : String.Types.ObjectId,
    ref: 'Thought'
    }
  ],
  friends : [
    {
      type : String.Types.ObjectId,
      ref: 'User'
    }
  ]
});

const User = model('User', userSchema);

module.exports = User;