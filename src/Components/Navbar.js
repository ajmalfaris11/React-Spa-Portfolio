import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

function Navbar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="sticky" color="primary" sx={{ padding: '0 2rem' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" color="inherit" component={Link} to="/" sx={{ textDecoration: 'none', fontWeight: 'bold' }}>
           AJMAL FARIS
          </Typography>
        </Box>

        {/* Navbar Items */}
        <Box sx={{ display: 'flex', gap: isSmallScreen ? 1 : 2, alignItems: 'center' }}>
          {!isSmallScreen && (
            <>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/projects">Projects</Button>
              <Button color="inherit" component={Link} to="/skills">Skills</Button>
              <Button color="inherit" component={Link} to="/experience">Experience</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </>
          )}
          
          {/* Social Icons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton color="inherit" href="https://github.com/ajmalfaris11" target="_blank">
              <GitHub />
            </IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com/in/ajmal-faris-31b0a22b5/" target="_blank">
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
