const mongoose = require('mongoose');
const { Schema } = mongoose;

const fields = {
  name: {
    type: String,
    trim: true,
    maxlength: 128,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    maxlength: 256,
    required: true,
  },
  photo: {
    type: String,
    trim: true,
    maxlength: 256,
    required: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
    maxlength: 128,
  },
  votes: {
    type: Number,
    default: 0
  },
  positiveVotes: {
    type: Number,
    default: 0
  }
};

const candidate = new Schema(fields, {
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
});

candidate
  .virtual('percentage')
  .get(
    function getVotes() {
      const percentage = Math.round((this.positiveVotes / this.votes) * 100);
      return percentage || 0;
    },
  )

module.exports = {
  Model: mongoose.model('candidate', candidate),
  fields,
};
