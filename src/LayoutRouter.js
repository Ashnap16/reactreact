




import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Course from './components/Course';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Join from './components/Join'; // Import Join component

const LayoutRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/join' element={<Join/>}></Route> {/* Add route for Join */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default LayoutRouter;
