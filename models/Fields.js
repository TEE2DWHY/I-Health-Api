const mongoose = require("mongoose");

const fieldsSchema = new mongoose.Schema({
  disease: {
    type: [String],
    enum: {
      values: ["NeuroFibromatosis"],
    },
    default: "NeuroFibromatosis",
  },
  specialty: {
    type: [String],
  },
  age: {
    type: [String],
  },
  insurance: {
    type: [String],
  },
  zipcode: {
    type: [String],
  },
});

module.exports = mongoose.model("Fields", fieldsSchema);
