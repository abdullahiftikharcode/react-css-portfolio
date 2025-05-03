import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

// Create the context
const ThemeContext = createContext();

/**
 * ThemeProvider - Context provider for managing dark/light theme
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export const ThemeProvider = ({ children }) => {
  // Use localStorage to persist theme preference
  const getInitialMode = () => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode ? savedMode === 'dark' : true; // Default to dark mode
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialMode);

  // Create theme based on current mode
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#00bcd4',
      },
      background: {
        default: isDarkMode ? '#121212' : '#f5f5f5',
        paper: isDarkMode ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
          },
        },
      },
    },
  });

  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('themeMode', isDarkMode ? 'dark' : 'light');
    
    // Optional: Update body class for global styling
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // Value to be provided to consumers
  const value = {
    isDarkMode,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to use the ThemeContext
 * @returns {Object} - ThemeContext value with isDarkMode and toggleTheme
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}; 