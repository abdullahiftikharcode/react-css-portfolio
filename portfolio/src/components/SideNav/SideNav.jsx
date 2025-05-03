// src/components/SideNav/SideNav.js
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Drawer, 
  Box, 
  Typography, 
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import profileImage from '../../assets/images/profileImage.jpg';
import styles from './SideNav.module.css';

const SideNav = ({ open, onClose }) => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Define navigation items with their icons
  const navItems = [
    { path: '/', label: 'Home', icon: <HomeIcon /> },
    { path: '/works', label: 'Projects', icon: <FolderIcon /> },
    { path: '/aboutme', label: 'About Me', icon: <SettingsIcon /> },
    { path: '/hire-me', label: 'Contact', icon: <EmailIcon /> },
  ];

  const handleDownloadCV = () => {
    // Replace with actual path to your CV
    window.open('/assets/AbdullahIftikharResume.pdf', '_blank');
  };

  const drawerContent = (
    <Box className={styles.sidebar}>
      {/* Profile Section */}
      <Box className={styles.profile}>
        <Box className={styles.profileImageContainer}>
          <img 
            src={profileImage} 
            alt="Abdullah Iftikhar" 
            className={styles.profileImage}
          />
        </Box>
        <Typography variant="h6" className={styles.name}>
          Abdullah Iftikhar
        </Typography>
        <Typography variant="body2" className={styles.title}>
          CS STUDENT
        </Typography>
      </Box>

      {/* Navigation Menu */}
      <List component="nav" className={styles.menu}>
        {navItems.map((item) => (
          <ListItem 
            button
            component={NavLink}
            to={item.path}
            key={item.path}
            className={
              location.pathname === item.path ? 
              `${styles.menuItem} ${styles.active}` : 
              styles.menuItem
            }
            onClick={isMobile ? onClose : undefined}
          >
            <ListItemIcon className={styles.menuIcon}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>

      {/* Footer Container */}
      <Box className={styles.footerContainer}>
        <Divider className={styles.divider} />
        <Box className={styles.footerContent}>
          {/* Download CV Button */}
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            className={styles.downloadButton}
            onClick={handleDownloadCV}
            size="small"
          >
            Download CV
          </Button>

          {/* Location and Date Info */}
          <Box className={styles.infoBox}>
            <Box className={styles.infoItem}>
              <CalendarTodayIcon fontSize="small" />
              <Typography variant="body2" className={styles.infoText}>
                3/5/2025
              </Typography>
            </Box>
            <Box className={styles.infoItem}>
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2" className={styles.infoText}>
                Lahore, Pakistan
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isMobile ? open : true}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, // Better mobile performance
      }}
      className={styles.drawer}
      classes={{
        paper: styles.drawerPaper,
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default SideNav;