// src/components/common/BackgroundVideo.js
import React from 'react';
import styled from '@emotion/styled';

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BackgroundVideo = () => (
  <StyledBackground>
    <StyledVideo autoPlay muted loop id="background-video">
      <source src="background.mp4" type="video/mp4" />
    </StyledVideo>
  </StyledBackground>
);
export default BackgroundVideo;
