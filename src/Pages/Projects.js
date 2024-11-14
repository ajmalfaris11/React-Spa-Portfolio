// src/components/ProjectsPage.js
import React, { useState } from 'react';
import { Box, Grid, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import ProjectCard from '../Components/ProjectCard';

const projectData = [
  {
    title: 'youtube',
    description: "A simple YouTube-like front-end design using HTML and CSS, featuring a header, sidebar, and video thumbnails grid. This design mimics YouTube's desktop layout but is not responsive.",
    techStack: ['HTML', 'CSS'],
    github: 'https://github.com/ajmalfaris11/youtube-frond-end',
    liveDemo: 'https://react-dashboard-example.com',
    image:"https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
  },
  {
    title: 'AMAZON',
    description: "A simple Amazon-like front-end design using HTML and CSS, featuring a header, navigation menu, and product grid, replicating Amazon’s desktop layout without responsiveness.",
    techStack: ['HTML', 'CSS'],
    github: 'https://github.com/ajmalfaris11/amazon-frontend-clone',
    liveDemo: 'https://amazon-frontend-clone-ten.vercel.app/',
    image:'https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png'

  },
  {
    title: 'Portfolio',
    description: 'A responsive portfolio website built with HTML, CSS, and JavaScript. It features a modern template with deffrent sections, fully responsive across devices.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ajmalfaris11/Ajmal-Faris',
    liveDemo: 'https://ajmal-faris.vercel.app/',
    image:'https://mir-s3-cdn-cf.behance.net/projects/404/49f28e189617081.Y3JvcCwxMDA2LDc4NywxOTYsMA.jpg'
  },

];

function ProjectsPage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [filter, setFilter] = useState('');

  // Filter projects by tech stack
  const filteredProjects = projectData.filter(project =>
    filter ? project.techStack.includes(filter) : true
  );

  return (
    <Box sx={{ padding: isSmallScreen ? '2rem 1rem' : '4rem 2rem', backgroundColor: theme.palette.background.paper }}>
      <Typography variant="h3" align="center" gutterBottom>
        My Projects
      </Typography>

      {/* Filter Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Button variant="outlined" onClick={() => setFilter('React')} sx={{ margin: '0 0.5rem' }}>React</Button>
        <Button variant="outlined" onClick={() => setFilter('Redux')} sx={{ margin: '0 0.5rem' }}>Redux</Button>
        <Button variant="outlined" onClick={() => setFilter('Material-UI')} sx={{ margin: '0 0.5rem' }}>Material-UI</Button>
        <Button variant="outlined" onClick={() => setFilter('')} sx={{ margin: '0 0.5rem' }}>All</Button>
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={4} justifyContent="center">
        {filteredProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard 
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              github={project.github}
              liveDemo={project.liveDemo}
              image={project.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProjectsPage;
