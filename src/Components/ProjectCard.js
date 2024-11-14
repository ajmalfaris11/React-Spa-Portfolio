// src/components/ProjectCard.js
import React from 'react';
import { Card, CardContent, Typography, Button, CardMedia, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch } from '@mui/icons-material';

const placeholderImage = 'https://via.placeholder.com/300x160?text=Project+Image';


function ProjectCard({ title, description, techStack, github, liveDemo, image = placeholderImage }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card sx={{
        borderRadius: '12px',
        boxShadow: 3,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out',
        "&:hover": {
          transform: 'scale(1.02)',
        },
      }}>
        {/* Responsive Image Section */}
        <CardMedia
          component="img"
          height="160"
          image={image} // replace with actual image URL or prop if provided
          alt={`${title} project image`}
        />
        <CardContent>
          <Typography variant="h6" color="primary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            {description}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Tech Stack:</strong> {techStack.join(', ')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              href={github}
              target="_blank"
              startIcon={<GitHub />}
              sx={{ marginRight: 1 }}
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              color="primary"
              href={liveDemo}
              target="_blank"
              startIcon={<Launch />}
            >
              Live Demo
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
