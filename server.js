const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/stations', require('./routes/stationRoutes'));

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port  ${process.env.PORT}`);
        });
    })
    .catch((err) => console.log(err));
