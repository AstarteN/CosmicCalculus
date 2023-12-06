const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

const eEqualsMCsquared = {
    equation: 'E = mc²',
    description: 'Mass-energy equivalence equation',
    constants: {
        speedOfLight: 299792458, // Speed of light in meters per second never changes
    },
    calculateEnergy: function (mass) {
        return mass * this.constants.speedOfLight ** 2;
    },
};

app.use(bodyParser.json());

// API Endpoint for calculating energy
app.post('/calculate-energy', (req, res) => {
    try {
        const { mass } = req.body;

        if (mass === undefined || mass === null || isNaN(mass)) {
            throw new Error('Invalid or missing mass parameter');
        }

        const energy = eEqualsMCsquared.calculateEnergy(mass);
        res.json({ energy });
    } catch (error) {
        // Handle errors
        res.status(400).json({ error: error.message });
    }
});

// API Endpoint for calculating distance
app.post('/calculate-distance', (req, res) => {
    try {
        const { speed, time } = req.body;

        if (speed === undefined || speed === null || isNaN(speed) || time === undefined || time === null || isNaN(time)) {
            throw new Error('Invalid or missing speed or time parameters');
        }

        // Calculate and respond with the distance
        const distance = speed * time;
        res.json({ distance });
    } catch (error) {
        // Handle errors
        res.status(400).json({ error: error.message });
    }
});

// API Endpoint for calculating force
app.post('/calculate-force', (req, res) => {
    try {
        const { mass, acceleration } = req.body;

        if (mass === undefined || mass === null || isNaN(mass) || acceleration === undefined || acceleration === null || isNaN(acceleration)) {
            throw new Error('Invalid or missing mass or acceleration parameters');
        }

        // Calculate and respond with the force
        const force = mass * acceleration;
        res.json({ force });
    } catch (error) {
        // Handle errors
        res.status(400).json({ error: error.message });
    }
});

app.get('/', (req, res) => {
    res.send('Welcome to Astartes CosmicCalculus APII!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
