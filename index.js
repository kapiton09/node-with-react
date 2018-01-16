const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

//mongoose.connect(keys.mongoURI);
// Using `mongoose.connect`...
var promise = mongoose.connect(keys.mongoURI, {
  useMongoClient: true,
  /* other options */
});
// Or `createConnection`
var promise = mongoose.createConnection(keys.mongoURI, {
  useMongoClient: true,
  /* other options */
});

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);