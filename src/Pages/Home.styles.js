import styled, { keyframes } from "styled-components";
import { IconButton as MuiIconButton } from "@mui/material";

// Animation for the text to fade in from the left
const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Animation for image and text to fade in with a zoom effect 
const fadeInZoom = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;




// Main container
export const HomePageContainer = styled.div`
  background-color: white;
  color: black;
  min-height: 80vh;
  padding: 2rem;
  display: flex;
  margin: 0px;
  justify-content: center;
  align-items: center;
`;

// Content container
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${fadeInLeft} 1s ease forwards;
`;

// Title

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #000;
  margin: 0;
  display: inline-block;
  overflow: hidden; 
  white-space: nowrap;
  width: 100%;
  

  span {
    display: inline-block;
    color: #2a9df4;
    animation: ${fadeInZoom} 1s ease-in-out;
    font-size: 3.5rem;
  }
`;

// Subtitle
export const Subtitle = styled.p`
  margin-top: 1rem;
  color: #a9a9a9;
  font-size: 1.1rem;
`;

// Know More Button
export const KnowMoreButton = styled.button`
  color: #2a9df4;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-top: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

// Social Icons
export const IconButton = styled(MuiIconButton)`
  color: #ffffff;
  transition: transform 0.5s ease;

  &:hover {
    color: #2a9df4;
    transform: scale(1.2);
  }
`;

// Profile Image
export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  transition: transform 0.3s ease;
  animation: ${fadeInZoom} 1.2s ease forwards;

  &:hover {
    transform: scale(1.02);
  }
`;

// Project Text
export const ProjectText = styled.div`
  margin-top: 2rem;
  h6 {
    color: #ffffff;
    font-weight: bold;
  }
  p {
    color: #a9a9a9;
    font-size: 0.9rem;
  }
`;
