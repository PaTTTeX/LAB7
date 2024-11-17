// Import necessary libraries
const express = require('express');  // Web framework
const mongoose = require('mongoose');  // MongoDB ODM
const cors = require('cors');  // Handle cross-origin requests
const bodyParser = require('body-parser');  // Parse request bodies
require('dotenv').config();  // Load environment variables

// Initialize Express app and define port
const app = express();
const port = 4000;

// Middleware to allow cross-origin requests and parse JSON data
app.use(cors()); // Allow requests from any origin
app.use(bodyParser.json()); // Parse incoming JSON requests

// Connect to MongoDB using URI from environment variables
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))  // Log success
  .catch(console.error);  // Log connection error

// Define the Movie schema and model for MongoDB
const Movie = mongoose.model('Movie', new mongoose.Schema({
  title: String,  // Movie title
  year: String,   // Release year
  poster: String, // URL of the movie poster
}));

// Route to create a new movie
app.post('/api/movies', async (req, res) => {
  try {
    // Create a new movie from the request body
    const movie = new Movie(req.body);
    await movie.save();  // Save the movie to the database
    res.status(201).json(movie);  // Send back the created movie
  } catch {
    res.status(500).json({ error: 'Failed to create movie' });  // Error handling
  }
});

// Route to get all movies
app.get('/api/movies', async (req, res) => {
  try {
    const movies = await Movie.find();  // Fetch all movies
    res.json(movies);  // Send the list of movies
  } catch {
    res.status(500).json({ error: 'Failed to fetch movies' });  // Error handling
  }
});

// Route to get a single movie by its ID
app.get('/api/movie/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);  // Find movie by ID
    if (!movie) return res.status(404).json({ error: 'Movie not found' });  // If not found
    res.json(movie);  // Send the movie data
  } catch {
    res.status(500).json({ error: 'Failed to fetch movie' });  // Error handling
  }
});

// Start the server and listen on the defined port
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
