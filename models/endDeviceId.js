const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const endDeviceIdSchema = new Schema({
  customer: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  driver: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  endDeviceId: {
    type: String,
    required: true,
    unique: true,
  },
});

const EndDeviceId = mongoose.model("EndDeviceId", endDeviceIdSchema);

module.exports = EndDeviceId;
