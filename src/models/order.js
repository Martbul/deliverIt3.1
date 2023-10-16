const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "the NAME of the order is required"],
    validate: {
      validator: function (value) {
        return /^[a-zA-Z]+ [a-zA-Z]+$/.test(value);
      },
      message: "please enter a correct name(exp: David Gonzalez))",
    },
  },
  order: { type: String, required: [true, "the order is required"] },
  address: {
    type: String,
    required: [true, "the address for the order is required"],
  },
  dayForDelivery: {
    type: String,
    required: [true, "the day for delivery is required"],
  },
  timeForDelivery: {
    type: String,
    required: [true, "the time for delivery is required"],
    validate: {
      validator: function (value) {
        return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value);
      },
      message: "please enter a correct time(hours:minutes)",
    },
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
