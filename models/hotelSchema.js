const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    
    type: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
