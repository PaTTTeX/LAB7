// Import necessary libraries and components
import { useEffect } from "react";  // useEffect to run side effects
import Card from 'react-bootstrap/Card';  // Card component from Bootstrap for styling

const MovieItem = (props) => {
  
  // Effect to log movie details when the movie prop changes
  useEffect(() => {
    console.log("Movie Item:", props.mymovie);  // Log the movie object passed in as a prop
  }, [props.mymovie]);  // Only rerun the effect when 'mymovie' changes

  return (
    <div>
      {/* Bootstrap Card to display movie details */}
      <Card>
        <Card.Header>{props.mymovie.Title}</Card.Header>  {/* Movie title */}
        <Card.Body>
          <blockquote className="blockquote mb-0">
            {/* Display the movie poster */}
            <img src={props.mymovie.Poster} alt={props.mymovie.Title} /> 
            {/* Movie year */}
            <footer>{props.mymovie.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieItem;  // Export the MovieItem component for use in other parts of the app
