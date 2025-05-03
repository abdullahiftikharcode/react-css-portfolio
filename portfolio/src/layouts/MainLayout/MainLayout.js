import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header will go here */}
      {/* Sidebar will go here */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
      {/* Footer will go here */}
    </Box>
  );
};

export default MainLayout;