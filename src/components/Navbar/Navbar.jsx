import React, { useState } from 'react';
import SignupForm from '../SignupForm/SignupForm';
import './Navbar.css';

function App() {
  const [showSignup, setShowSignup] = useState(false);

  const handleSignupClick = () => {
    setShowSignup(!showSignup);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Implement your form validation logic here
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    // Basic example validation (replace with more robust validation)
    if (!name || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    console.log('Form submitted:', { name, email, password }); // Replace with actual form submission logic

    // Close the form after successful submission (optional)
    setShowSignup(false);
  };

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <a href="#" className="logo">
            Mentor-Mentee
          </a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Our Mentors</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li onClick={handleSignupClick}>
              <button>Sign Up</button>
            </li>
          </ul>
        </nav>
      </header>
      {showSignup && (
        <SignupForm onClose={handleSignupClick} onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default App;
