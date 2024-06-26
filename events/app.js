const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT || 4002;

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.post('/events', async (req, res) => {
    const event = req.body;
    // await axios.post('http://localhost:4001/events', event);
    // await axios.post('http://localhost:4002/events', event);
    await axios.post('http://localhost:4004/events', event);
    res.send('done');
});

app.listen(PORT, () => {
    console.log('Event Bus Server is logging on PORT', PORT);
});