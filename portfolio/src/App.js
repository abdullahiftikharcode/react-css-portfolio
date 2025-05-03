import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { PageTitleProvider } from './context/PageTitleContext';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './layouts/MainLayout/MainLayout';
import Home from './pages/Home/Home';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <PageTitleProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="aboutme" element={<div>About Me Page</div>} />
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