const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const users = require('./routes/users');
const shipments = require('./routes/shipments');
const deposits = require('./routes/deposits');
const otp = require('./routes/otp');
const accounts = require('./routes/accounts');
const millShips = require('./routes/millennium');

const app = express();

// Body parse
app.use(express.json());

// Enable CORS
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount Routers
app.use('/api/v1/users', users);
app.use('/api/v1/shipments', shipments);
app.use('/api/v1/deposits', deposits);
app.use('/api/v1/otp', otp);
app.use('/api/v1/accounts', accounts);
app.use('/api/v1/millennium', millShips);

const PORT = process.env.PORT || 8000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  )
);
