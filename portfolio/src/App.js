import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { PageTitleProvider } from './context/PageTitleContext';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './layouts/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <PageTitleProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="aboutme" element={<AboutMe />} />
              <Route path="works" element={<div>Works Page</div>} />
              <Route path="hire-me" element={<div>Contact Page</div>} />
            </Route>
          </Routes>
        </Router>
      </PageTitleProvider>
    </ThemeProvider>
  );
}

export default App;