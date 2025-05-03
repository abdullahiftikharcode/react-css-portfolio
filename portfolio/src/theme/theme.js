import { createTheme } from '@mui/material/styles';

   // Light theme config that matches original design
   export const lightTheme = createTheme({
     palette: {
       mode: 'light',
       primary: {
         main: '#3f51b5',
       },
       secondary: {
         main: '#f50057',
       },
       background: {
         default: '#ffffff',
         paper: '#f5f5f5',
       },
       text: {
         primary: '#333333',
         secondary: '#666666',
       },
     },
     typography: {
       fontFamily: '"Helvetica", "Arial", sans-serif',
     },
     components: {
       MuiButton: {
         styleOverrides: {
           root: {
             borderRadius: '50px',
           },
         },
       },
     },
   });

   // Dark theme config that matches original design
   export const darkTheme = createTheme({
     palette: {
       mode: 'dark',
       primary: {
         main: '#90caf9',
       },
       secondary: {
         main: '#f48fb1',
       },
       background: {
         default: '#121212',
         paper: '#1e1e1e',
       },
       text: {
         primary: '#ffffff',
         secondary: '#b0b0b0',
       },
     },
     typography: {
       fontFamily: '"Helvetica", "Arial", sans-serif',
     },
     components: {
       MuiButton: {
         styleOverrides: {
           root: {
             borderRadius: '50px',
           },
         },
       },
     },
   });