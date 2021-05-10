const mongoose = require('mongoose');

const ShipmentSchema = new mongoose.Schema(
  {
    country: String,
    customer: String,
    destination: String,
    ship_id: String,
    status: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
);

module.exports = mongoose.model('Shipment', ShipmentSchema);