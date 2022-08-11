const Validator = require("validator");
const isEmpty = require("./is-empty");
const mongoose = require("mongoose")

const validateRoomInput = data => {
  const errors = {};
  const hostels = ['BH 1', 'BH 2', 'BH 3', 'GH'];
  // const genders = ['BOY', 'GIRL'];
  const work = ['CLEANING', 'REPAIR'];
  const { id, hostel, gender, type, worker, time } = data

  data.id = !isEmpty(data.id) ? data.id : "";
  data.hostel = !isEmpty(data.hostel) ? data.hostel : "";
  // data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.type = !isEmpty(data.type) ? data.type : "";
  data.worker = !isEmpty(data.worker) ? data.worker : "";
  data.time = !isEmpty(data.time) ? data.time : new Date();


  if (Validator.isEmpty(id)) {
    errors.id = "Room id is missing";
  }

  if (Validator.isEmpty(hostel) || !hostels.includes(hostel)) {
    errors.hostel = "Room hostel is missing or invalid";
  }

  // if (Validator.isEmpty(gender) || !genders.includes(gender)) {
  //   errors.gender = "Occupancy is missing or invalid";
  // }

  if (Validator.isEmpty(type) || !work.includes(type)) {
    errors.type = "Action Missing or Invalid";
  }
  if (Validator.isEmpty(worker)) {
    errors.worker = "Worker Name Required";
  }
  if (Validator.isEmpty(time)) {
    errors.time = "Date and Time Required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = {
  validateRoomInput
}
