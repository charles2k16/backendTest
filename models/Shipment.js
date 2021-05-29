const mongoose = require('mongoose');

const ShipmentSchema = new mongoose.Schema(
  {
    country: String,
    current_loc: String,
    customer: String,
    destination: String,
    shipDate: String,
    status_date: String,
    ship_id: String,
    status: String,
    description: String,
    quantity: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
);

module.exports = mongoose.model('Shipment', ShipmentSchema);