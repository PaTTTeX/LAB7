// Import required libraries and components
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap for styling
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // React Router for navigation
import NavigationBar from './components/NavigationBar';  // Navigation bar component
import Header from './components/header';  // Header component
import Footer from './components/footer';  // Footer component
import Content from './components/content';  // Main content component
import Read from './components/read';  // Component for reading/displaying movies
import Create from './components/create';  // Component for creating new movies

function App() {
  return (
    <Router>  {/* Set up React Router to handle navigation */}
      <NavigationBar />  {/* Render the navigation bar */}

      <Routes>  {/* Define routes for different paths */}
        <Route path="/" element={<Content />} />  {/* Route for the homepage */}
        <Route path="/read" element={<Read />} />  {/* Route for reading/displaying movies */}
        <Route path="/create" element={<Create />} />  {/* Route for creating new movies */}
      </Routes>

      <Footer />  {/* Render the footer */}
    <
