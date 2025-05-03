import { createContext, useState, useEffect, useContext } from 'react';
   import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
   import { lightTheme, darkTheme } from '../theme/theme';

   const ThemeContext = createContext();

   export const ThemeProvider = ({ children }) => {
     const [isDarkMode, setIsDarkMode] = useState(false);

     useEffect(() => {
       // Check localStorage or system preference
       const storedTheme = localStorage.getItem('theme');
       if (storedTheme === 'dark') {
         setIsDarkMode(true);
       }
     }, []);

     const toggleTheme = () => {
       setIsDarkMode(!isDarkMode);
       localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
     };

     return (
       <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
         <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
           {children}
         </MuiThemeProvider>
       </ThemeContext.Provider>
     );
   };

   export const useTheme = () => useContext(ThemeContext);