import React, { useEffect, useState } from "react";
import {
  HomePageContainer,
  ContentContainer,
  Title,
  Subtitle,
  KnowMoreButton,
  IconButton,
  ProfileImage,
} from "./Home.styles";
import { Container, Grid } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about");
  };

  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Developer', 'Designer', 'Freelancer'];

  // Change the text every 3 seconds (to match the animation timing)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 3 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <HomePageContainer>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <ContentContainer>
              <div>
                <Title>
                I'M A <span key={textIndex} className="animated-text">{texts[textIndex]}</span>
                </Title>
              </div>
              <Subtitle>
                I’m a full stack developer from India, passionate about both
                front-end and back-end development. Currently working as a
                freelancer, I lead projects to create seamless, scalable digital
                solutions.
              </Subtitle>

              <KnowMoreButton onClick={handleNavigate}>
                Know more <ArrowForwardIcon style={{ marginLeft: "5px" }} />
              </KnowMoreButton>
              {/* Social Icons */}
              <div style={{ display: "flex", gap: "10px", marginTop: "2rem" }}>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
              </div>
            </ContentContainer>
          </Grid>

          {/* Right Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProfileImage
              src="https://images6.alphacoders.com/135/1350469.png"
              alt="Profile"
            />
          </Grid>
        </Grid>
      </Container>
    </HomePageContainer>
  );
}

export default HomePage;
