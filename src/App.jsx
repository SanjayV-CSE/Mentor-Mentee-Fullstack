// App.js
import React from 'react';
import NavBar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import MentorBanner from './components/MentorBanner/MentorBanner';
import ContactPage from './components/ContactPage/ContactPage';
// Import other components here

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <MentorBanner />
      <ContactPage />
      {/* Other components */}
    </div>
  );
}

export default App;
