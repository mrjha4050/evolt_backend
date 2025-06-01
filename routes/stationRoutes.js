const express = require('express');
const auth = require('../middleware/authMiddleware');  

const {
    createStation,
    getAllStations,
    getStationById,
    updateStation,
    deleteStation
} = require('../controller/stationController');

const router = express.Router();
 
// router.use(auth);        by uncommenting this line we can apply auth middleware to all routes
router.post('/', createStation);
router.get('/', getAllStations);
router.get('/:id', getStationById);
router.put('/:id', updateStation);
router.delete('/:id', deleteStation);

module.exports = router;