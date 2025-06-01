const mongoose = require('mongoose');


const stationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        latitude :Number,
        longitude :Number
    },
    status : { type:String , enum: ['Active', 'InActive'] , default: 'Active' },
    powerOuput : Number,
    connectorType: String,
});

module.exports = mongoose.model('Station', stationSchema);