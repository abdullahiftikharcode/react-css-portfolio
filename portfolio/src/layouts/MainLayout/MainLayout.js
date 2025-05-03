import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Header from '../../components/Header/Header';
import SideNav from '../../components/SideNav/SideNav';
import Footer from '../../components/Footer/Footer';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header toggleSidebar={toggleSidebar} />
      <SideNav open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;