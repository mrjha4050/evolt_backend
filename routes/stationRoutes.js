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

router.use(auth);
router.post('/', createStation);
router.get('/', getAllStations);
router.get('/:id', getStationById);
router.put('/:id', updateStation);
router.delete('/:id', deleteStation);

module.exports = router;