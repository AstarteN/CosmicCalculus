const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Constants and calculations
const eEqualsMCsquared = {
    equation: 'E = mc²',
    description: 'Mass-energy equivalence equation',
    constants: {
        speedOfLight: 299792458,
    },
    calculateEnergy: function (mass) {
        return mass * this.constants.speedOfLight ** 2;
    },
};

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Endpoints
app.post('/calculate-energy', (req, res) => {
    try {
        const { mass } = req.body;

        if (mass === undefined || mass === null || isNaN(mass)) {
            throw new Error('Invalid or missing mass parameter');
        }

        const energy = eEqualsMCsquared.calculateEnergy(mass);
        res.json({ energy });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/calculate-distance', (req, res) => {
    try {
        const { speed, time } = req.body;

        if (speed === undefined || speed === null || isNaN(speed) || time === undefined || time === null || isNaN(time)) {
            throw new Error('Invalid or missing speed or time parameters');
        }

        const distance = speed * time;
        res.json({ distance });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/calculate-force', (req, res) => {
    try {
        const { mass, acceleration } = req.body;

        if (mass === undefined || mass === null || isNaN(mass) || acceleration === undefined || acceleration === null || isNaN(acceleration)) {
            throw new Error('Invalid or missing mass or acceleration parameters');
        }

        const force = mass * acceleration;
        res.json({ force });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/', (req, res) => {
    res.send('Welcome to Astartes CosmicCalculus API!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
