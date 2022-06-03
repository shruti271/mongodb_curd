const { default: mongoose } = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },

  email: {
    type: String,
    required: true,
    unique: [true, "email is already registered"],
    validator(value) {
      if (!validator.isEmail()) {
        throw new Error("invalid email id");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
    min: 10,
    max: 10,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const student = new mongoose.model("Students", studentSchema);

module.exports = student;
