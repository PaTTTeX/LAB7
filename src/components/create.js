// Importing necessary libraries
import axios from "axios";  // Axios for making HTTP requests
import { useState } from "react";  // useState to manage component state

const Create = () => {

    // State hooks to store user input values
    const [title, setTitle] = useState('');  // Movie title
    const [year, setYear] = useState('');  // Movie release year
    const [poster, setPoster] = useState('');  // Movie poster URL

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent default form submission
        const movie = {title, year, poster};  // Create movie object from state
        console.log(movie);  // Log the movie object to the console for testing

        // Send the movie data to the backend via POST request
        axios.post('http://localhost:4000/api/movies', movie)
            .then((res) => { 
                console.log(res.data);  // Log the response from the server (e.g., created movie)
            })
            .catch();  // Handle errors if request fails (currently no error handling)
    }

    return (
        <div>
            <h3>Hello from create component!</h3>  {/* Title of the page */}
            
            {/* Form to input movie details */}
            <form onSubmit={handleSubmit}>
                
                {/* Input for movie title */}
                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}  // Bind value to state
                        onChange={(e) => { setTitle(e.target.value) }}  // Update title on change
                    />
                </div>

                {/* Input for movie year */}
                <div className="form-group">
                    <label>Add Movie Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}  // Bind value to state
                        onChange={(e) => { setYear(e.target.value) }}  // Update year on change
                    />
                </div>

                {/* Input for movie poster URL */}
                <div className="form-group">
                    <label>Add Movie Poster: </label>
                    <input type="text"
                        className="form-control"
                        value={poster}  // Bind value to state
                        onChange={(e) => { setPoster(e.target.value) }}  // Update poster on change
                    />
                </div>

                {/* Submit button */}
                <div>
                    <input type="submit" value="Add Movie" />
                </div>
            </form>
        </div>
    );
}
export default Create;  // Export the Create component for use in other parts of the app
