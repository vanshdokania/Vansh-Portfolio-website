import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DSA from './components/DSA';
import MachineLearning from './components/MachineLearning';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main>
        <Home />
        <DSA />
        <MachineLearning />
        <Projects />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 