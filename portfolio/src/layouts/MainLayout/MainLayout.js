import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Header from '../../components/Header/Header';
import SideNav from '../../components/SideNav/SideNav';
import Footer from '../../components/Footer/Footer';
import { usePageTitle } from '../../context/PageTitleContext';
import { useLocation } from 'react-router-dom';
import styles from './MainLayout.module.css';
import { useTheme, useMediaQuery } from '@mui/material';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { setPageTitle } = usePageTitle();
  const location = useLocation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Update page title based on current route
  useEffect(() => {
    const pathname = location.pathname;
    let title = 'Home';
    
    if (pathname === '/') {
      title = 'Home';
    } else if (pathname === '/aboutme') {
      title = 'About Me';
    } else if (pathname === '/works') {
      title = 'My Projects';
    } else if (pathname === '/hire-me') {
      title = 'Hire Me';
    }
    
    setPageTitle(title);
  }, [location, setPageTitle]);

  // Close sidebar on mobile when route changes
  useEffect(() => {
    if (!isDesktop) {
      setSidebarOpen(false);
    }
  }, [location.pathname, isDesktop]);

  return (
    <Box className={styles.layoutContainer}>
      <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <SideNav open={sidebarOpen || isDesktop} onClose={() => !isDesktop && setSidebarOpen(false)} />
      <Box 
        component="main" 
        className={`${styles.mainContent} ${sidebarOpen ? styles.contentShifted : ''} ${styles.pageTransition}`}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;