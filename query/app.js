const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT || 4001;

const app = express();
app.use(bodyParser.json());
app.use(cors());


const posts = [];
app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/events', (req, res) => {
    const { type, data } = req.body;
    console.log(type, data);
    if (type === 'PostCreated') {
        const { id, title } = data;
        posts.push({
            id, title, comments: []
        });
    } else if (type === 'CommentCreated') {
        const { id, text, postId } = data;
        const index = posts.findIndex(p => p.id === postId);
        if (index > -1) {
            posts[index].comments.push({
                id, text
            })
        }
    }
    res.send({});
});

app.listen(PORT, () => {
    console.log('Query Server is logging on PORT', PORT);
});