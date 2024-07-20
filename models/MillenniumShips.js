const mongoose = require('mongoose');

const TrackingHistorySchema = new mongoose.Schema({
  status: String,
  delivery_date: String,
  delivery_time: String,
  shipper: String,
  description: String,
  status_date: String,
  current_loc: String,
  // Add more fields as necessary for your transactions
});

const MillenniumShipsSchema = new mongoose.Schema({
  departure: String,
  destination: String,
  shipDate: String,
  ship_id: String,
  history: [TrackingHistorySchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('MillenniumShips', MillenniumShipsSchema);
