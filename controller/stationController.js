const Station = require('../models/Station');

exports.createStation = async (req , res) => {
    try {
        const station = await Station.create(req.body);
        res.status(201).json({ message: 'Station created successfully' , station });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllStations = async (req , res) => {
    try {
        const stations = await Station.find();
        res.status(200).json({ message: 'Stations fetched successfully' , stations });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getStationById = async (req , res) => {
    try {
        const station = await Station.findById(req.params.id);
        if(!station) {
            return res.status(404).json({ message: 'Station not found' });
        }
        res.status(200).json({ message: 'Station fetched successfully' , station });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateStation = async (req , res) => {
    try {
        const station = await Station.findByIdAndUpdate(req.params.id , req.body , { new: true });
        if(!station) {
            return res.status(404).json({ message: 'Station not found' });
        }
        res.status(200).json({ message: 'Station updated successfully' , station });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteStation = async (req , res) => {
    try {
        const station = await Station.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Station deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};