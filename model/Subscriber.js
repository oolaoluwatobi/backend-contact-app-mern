const mongoose = require('mongoose');
const hashPassword = require('../config/hashPassword')
const Schema = mongoose.Schema;

const subscriberSchema = new Schema({
  username: {
    type: String,
    // unique: true,
    required: true
  },
  firstname: {
    type: String,
    required: true,
    // unique: true,
    maxLength: 100
  },
  lastname: { 
    type: String,
    required: true,
    // unique: true, 
    maxLength: 100
  },
  imageUrl: {
    type: String,
    required: true
    // unique: true
  },
  bio: {
    type: String, 
    // required: true,
    maxLength: 500 
    // unique: true
  },
  favorite: {
    type: Boolean, 
    // required: true,
    // unique: true
  },
  email: {
    type: String, 
    unique: true, 
    required: true, 
    // validate: {
    //   validator: function(value) {
    //     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    //   },
    //   message: "Invalid email format"
    // }
  }

});


module.exports = mongoose.model('Subscribers', subscriberSchema);