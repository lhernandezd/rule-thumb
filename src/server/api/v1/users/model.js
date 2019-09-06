const mongoose = require('mongoose');

const { Schema } = mongoose;

const fields = {
  username: {
    type: String,
    required: true,
    trim: true,
    maxlength: 128,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    min: 6,
  },
  age: {
    type: Number,
    min: 18,
  },
  status: {
    type: String,
    trim: true,
    maxlength: 128,
  }
};

const user = new Schema(fields, {
  timestamps: true,
});

module.exports = {
  Model: mongoose.model('user', user),
  fields,
};
