var mongoose=require('mongoose');

var Asset = mongoose.model('Asset', {
    Info: {
        type:String,
        required:true,
        minlength: 1
    },
    Reciever: {
        type: String,
        required: true,
        minlength: 1,
    },
    Sender: {
        type: String,
        required:true;
        minlength: 1
    },
    Timestamp: {
      type: Date,
      default:null;
    }
  });
  module.exports = {Asset};