const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  customer: {
    type: String,
    required: true,
    unique: true,
  },
  tag: {
    type: String,
    required: true,
    unique: true,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
