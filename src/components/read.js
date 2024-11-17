// Import necessary libraries
import Movies from "./movies";  // Import Movies component to display movies list
import { useEffect, useState } from "react";  // useState for state, useEffect for side effects
import axios from "axios";  // Axios for making HTTP requests

const Read = () => {

  // State to store the list of movies
  const [movies, setMovies] = useState([]);  // Initially, an empty array

  // Fetch movies data when the component mounts
  useEffect(() => {
    // Send GET request to the backend to retrieve movies
    axios.get('http://localhost:4000/api/movies')
      .then((response) => {
        console.log(response.data);  // Log the response from server
        setMovies(response.data);  // Update the state with the movie list
      })
      .catch((error) => {
        console.log(error);  // Log any errors that occur
      });
  }, []);  // Empty dependency array to only run once when the component mounts

  return (
    <div>
      <h3>Hello from read component!</h3>  {/* Title of the page */}
      {/* Pass the list of movies to the Movies component */}
      <Movies myMovies={movies} />
    </div>
  );
}

export default Read;  // Export the Read component for use elsewhere in the app
