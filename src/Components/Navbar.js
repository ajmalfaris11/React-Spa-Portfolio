import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/projects">Projects</Button>
        <Button color="inherit" component={Link} to="/skills">Skills</Button>
        <Button color="inherit" component={Link} to="/experience">Experience</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
