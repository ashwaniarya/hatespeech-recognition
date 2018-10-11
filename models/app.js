// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    default: 'none'
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const App = mongoose.model('App', appSchema);

module.exports = App;