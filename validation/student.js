const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateStudentInput(data) {
  const errors = {};
  const genders = ['MALE', 'FEMALE']

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.batch = !isEmpty(data.batch) ? data.batch : "";
  data.id = !isEmpty(data.id) ? data.id : "";
  data.hostel = !isEmpty(data.hostel) ? data.hostel : "";
  data.room = !isEmpty(data.room) ? data.room : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email Field is Required";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is Required";
  }
  if (Validator.isEmpty(data.batch)) {
    errors.batch = "Batch is required";
  }
  if (Validator.isEmpty(data.id)) {
    errors.id = "Student Id is Required";
  }
  if (Validator.isEmpty(data.hostel)) {
    errors.hostel = "Hostel is Required";
  }
  if (Validator.isEmpty(data.room)) {
    errors.room = "Room is Required";
  }
  // if (Validator.isEmpty(data.gender) || !genders.includes(data.gender)) {
  //   errors.gender = "Gender Missing or Invalid";
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
