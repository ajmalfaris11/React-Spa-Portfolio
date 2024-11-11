// src/components/Footer.js
import React from 'react';
import { Box, Grid, IconButton, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { GitHub, LinkedIn, Email, Twitter } from '@mui/icons-material';
import { motion } from 'framer-motion';

function Footer() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        padding: isSmallScreen ? '1rem' : '3rem',
        position: 'relative',
        bottom: 0,
        width: '100%',
        boxShadow: 2,
        boxSizing: 'border-box',  
      }}
    >
      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Left Side - Contact Information */}
        <Grid item xs={12} sm={6} md={4} sx={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
          <Typography variant="h6" color="primary" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Feel free to reach out for collaborations or opportunities!
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            href="mailto:ajmalfaris.me@gmail.com"
            sx={{
              marginTop: 1,
              width: isSmallScreen ? '100%' : 'auto',
            }}
          >
            Contact Me
          </Button>
        </Grid>

        {/* Middle - Social Media Links */}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          container
          justifyContent={isSmallScreen ? 'center' : 'space-around'}
          alignItems="center"
          sx={{
            marginBottom: isSmallScreen ? '1rem' : '0',
          }}
        >
          <IconButton
            color="primary"
            href="https://github.com/ajmalfaris11"
            target="_blank"
            sx={{
              margin: '0.5rem',
              '&:hover': {
                transform: 'scale(1.2)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <GitHub fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            href="https://www.linkedin.com/in/ajmal-faris-31b0a22b5/"
            target="_blank"
            sx={{
              margin: '0.5rem',
              '&:hover': {
                transform: 'scale(1.2)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            href="https://x.com/AjmalFarisX11"
            target="_blank"
            sx={{
              margin: '0.5rem',
              '&:hover': {
                transform: 'scale(1.2)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <Twitter fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            href="mailto:ajmalfaris.me@gmail.com"
            sx={{
              margin: '0.5rem',
              '&:hover': {
                transform: 'scale(1.2)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          >
            <Email fontSize="large" />
          </IconButton>
        </Grid>

        {/* Right Side - Scroll to Top Button */}
        <Grid item xs={12} sm={6} md={4} container justifyContent="flex-end" alignItems="center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: '50%',
                width:"50px",
                height:"50px",
                padding: isSmallScreen ? '0.8rem' : '1rem',
                boxShadow: 3,
                transition: 'transform 0.3s ease',
                minWidth: 'auto',
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              ↑
            </Button>
          </motion.div>
        </Grid>
      </Grid>

      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Ajmal Faris | All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
