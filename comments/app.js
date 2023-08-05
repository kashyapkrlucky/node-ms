const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// const commentsByPost = {};

// app.get('/post/:id/comments', (req, res) => {
//     res.send(commentsByPost[req.params.id]);
// });

app.post('/post/:id/comments/create', async (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { text } = req.body;
    // const comments = commentsByPost[req.params.id] || [];
    const data = { id: commentId, postId: req.params.id, text };
    // comments.push(data);
    // commentsByPost[req.params.id] = comments;    
    await axios.post('http://localhost:4003/events', {
        type: 'CommentCreated', data
    });
    res.send({});
});

// app.post('/events', (req, res, next) => {
//     res.send({});
// });

app.listen(4002, () => {
    console.log('Comments Server is logging on PORT', 4002);
});