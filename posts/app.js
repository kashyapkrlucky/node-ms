const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');
const axios = require('axios');
const PORT = process.env.PORT || 4003;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = [];

// app.get('/posts', (req, res) => {
//     res.send(posts);
// });

app.post('/post/create', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    // posts.push({ id, title });
    await axios.post('http://localhost:4003/events', {
        type: 'PostCreated', data: { id, title }
    });
    res.send({});
});

// app.post('/events', (req, res, next) => {
//     res.send({});
// });

app.listen(PORT, () => {
    console.log('Posts Server is logging on PORT', PORT);
});