const mongoose = require('mongoose');

// Define a MongoDB schema for the ChatBox collection
const ChatBoxSchema = new mongoose.Schema({
  idCustomer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
    required: true,
  },
  idAssistant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
    required: true,
  },
  content: String,
  isSend: Number,
  // You can add more fields as needed
});

// Define the ChatBox model based on the schema
const ChatBox = mongoose.model('ChatBox', ChatBoxSchema);

module.exports = ChatBox;
