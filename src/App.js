import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/Contact';

import './index.css';

function App() {

  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home />;
    } else if (currentPage === 'about') {
      return <About />;
    } else if (currentPage === 'portfolio') {
      return <Projects />;
    } else if (currentPage === 'resume') {
      return <Resume />;
    } else if (currentPage === 'contact') {
      return <Contact />;
    }
  };

  return (
    <div>

      <Header currentPage={currentPage} setCurrentPage={handlePageChange} />
        {renderPage()}

      {/* <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/> */}
    </div>
  );
}

export default App;