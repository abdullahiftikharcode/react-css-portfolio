import { lazy, Suspense } from 'react';
   import { BrowserRouter, Routes, Route } from 'react-router-dom';
   import { PageTitleProvider } from './context/PageTitleContext';
   import { ThemeProvider } from './context/ThemeContext';
   import CircularProgress from '@mui/material/CircularProgress';
   import Box from '@mui/material/Box';
   import MainLayout from './layouts/MainLayout/MainLayout';

   // Lazy load pages
   const Home = lazy(() => import('./pages/Home/Home'));
   const AboutMe = lazy(() => import('./pages/AboutMe/AboutMe'));
   const Works = lazy(() => import('./pages/Works/Works'));
   const HireMe = lazy(() => import('./pages/HireMe/HireMe'));

   // Loading fallback
   const LoadingFallback = () => (
     <Box 
       sx={{ 
         display: 'flex', 
         justifyContent: 'center', 
         alignItems: 'center', 
         height: '100vh' 
       }}
     >
       <CircularProgress />
     </Box>
   );

   function App() {
     return (
       <ThemeProvider>
         <PageTitleProvider>
           <BrowserRouter>
             <Suspense fallback={<LoadingFallback />}>
               <Routes>
                 <Route path="/" element={<MainLayout />}>
                   <Route index element={<Home />} />
                   <Route path="aboutme" element={<AboutMe />} />
                   <Route path="works" element={<Works />} />
                   <Route path="hire-me" element={<HireMe />} />
                 </Route>
               </Routes>
             </Suspense>
           </BrowserRouter>
         </PageTitleProvider>
       </ThemeProvider>
     );
   }

   export default App;