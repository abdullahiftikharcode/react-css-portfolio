// src/components/Header/Header.js
import React, { useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Box,
  useTheme,
  useMediaQuery,
  Container,
  Grid,
  Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { usePageTitle } from '../../context/PageTitleContext';
import { useTheme as useCustomTheme } from '../../context/ThemeContext';
import styles from './Header.module.css';

const Header = ({ toggleSidebar, sidebarOpen }) => {
  const { pageTitle } = usePageTitle();
  const { isDarkMode, toggleTheme } = useCustomTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  
  // Navigation items matching your original portfolio
  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/aboutme', label: 'ABOUTME' },
    { path: '/works', label: 'WORKS' },
    { path: '/hire-me', label: 'HIRE ME' }
  ];

  return (
    <Box component="header" className={styles.headerWrapper}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Box className={styles.headerTop}>
              {/* Menu Toggle Button */}
              <Button
                className={`${styles.menuToggle} ${sidebarOpen ? styles.active : ''}`}
                aria-label="open drawer"
                onClick={toggleSidebar}
                variant="outlined"
                size="small"
              >
                <MenuIcon />
              </Button>
              
              {/* Page Title */}
              <Typography 
                variant="h1" 
                component="h1"
                className={styles.pageTitle}
                id="headingtitle"
              >
                {pageTitle}
              </Typography>
              
              {/* Theme Toggle Button */}
              <IconButton 
                onClick={toggleTheme}
                className={styles.themeToggle}
                aria-label="toggle theme"
                sx={{ borderRadius: '50%', height: 60, width: 60 }}
              >
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                    <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                    <path fill="#000" d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/>
                  </svg>
                )}
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
      
      {/* Navigation Links */}
      <Container>
        <Box className={styles.navHeader}>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => 
                isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
              }
              data-text={item.label}
            >
              {item.label}
            </NavLink>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Header;