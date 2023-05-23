// src/components/home/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 4rem;
`;

const CustomButton = styled(Button)`
  background-color: #2196f3;
  color: #ffffff;
  margin-bottom: 5rem;
  &:hover {
    /* 鼠标悬停时的背景颜色*/
    background-color: #1e88e5;
  }
`;

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/lesson1', { replace: true });
  }

  return (
    <HomeContainer>
      <Title>欢迎来到AR数学课</Title>
      <CustomButton onClick={handleClick}>开始学习</CustomButton>
    </HomeContainer>
  );
}

export default Home;
