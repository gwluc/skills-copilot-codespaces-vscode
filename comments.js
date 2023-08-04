// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create express app
const app = express();

// Use body parser to parse JSON body
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Array of comments
const comments = [];

// Handle GET /comments
app.get('/comments', (req, res) => {
  // Send back comments array
  res.json(comments);
});

// Handle POST /comments
app.post('/comments', (req, res) => {
  // Create new comment
  const comment = {
    id: comments.length,
    text: req.body.text,