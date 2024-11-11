import React from "react";
import { Card, CardContent, CardActions, Typography, Button, CardMedia, Chip} from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: 345,
  margin: "auto", 
  transition: "all 0.2s ease-in-out", 
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)", 
    transform: "scale(1.02)",
  },
}));

const FeaturedBadge = styled(Chip)({
  position: "absolute",
  top: "16px",
  right: "16px",
  backgroundColor: "#ff5733",
  color: "white",
  fontWeight: "bold",
});

function ProjectCard({ title, description, techStack, link, github, image, isFeatured }) {
  return (
    <Card>
      <StyledCard>
        {isFeatured && <FeaturedBadge label="Featured" />}
        <CardMedia
          component="img"
          height="140"
          image={image || "https://via.placeholder.com/345x140"}
          alt={`${title} project`}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            {description}
          </Typography>
          <Typography variant="subtitle2" color="primary">
            {techStack}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="primary" href={link} target="_blank">
            Live Demo
          </Button>
          <Button size="small" variant="outlined" color="secondary" href={github} target="_blank">
            GitHub
          </Button>
        </CardActions>
      </StyledCard>
    </Card>
  );
}

export default ProjectCard;
