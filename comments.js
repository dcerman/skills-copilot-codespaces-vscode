// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Read comments from file
function readComments() {
    const data = fs.readFileSync('comments.json', 'utf8');
    return JSON.parse(data);
}

// Write comments to file
function writeComments(comments) {
    fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));
}

// Routes
app.get('/comments', (req, res) => {
    const comments = readComments();
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const newComment = req.body;
    const comments = readComments();
    comments.push(newComment);
    writeComments(comments);
    res.status(201).json(newComment);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});