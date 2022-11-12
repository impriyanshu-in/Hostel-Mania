const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  batch: {
    type: Number,
    required: true,
    min: 2018,
    max: 2021

  },
  id: {
    type: String,
    unique: true,
  },
  room: {
    type: String,
  },
  hostel: {
    type: String,
    enum: ['BH 1', 'BH 2', 'BH 3', 'GH'],
    trim: true,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  // gender: {
  //   type: String,
  //   enum: ['MALE', 'FEMALE'],
  //   required: true,
  // }
});

module.exports = Student = mongoose.model("student", StudentSchema);
