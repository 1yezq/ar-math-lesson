// footer/Footer.js
import React from 'react';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  font-size: 1.5rem;
  width: 100%;
  padding: 20px;
  color: #ffffff; 
  background-color: #020620;
  text-align: center;
  position: fixed;
  bottom: 0;
`;

const Footer = () => {
  return <StyledFooter>AR&copy;2023.</StyledFooter>;
};

export default Footer;
