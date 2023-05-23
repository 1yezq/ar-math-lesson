// src/components/lesson/Lesson.js
import React from 'react';
import styled from '@emotion/styled';
import { Typography, Container } from '@mui/material';

const LessonContainer = styled(Container)`
  margin-top: 5rem;
`;

const StyledTypography = styled(Typography)`
  margin-top: 2rem;
  ${({ variant }) => {
    if (variant === 'h3') {
      return `
        color: white;
      `;
    }
    if (variant === 'body1') {
      return `
        color: white;
      `;
    }
  }}
`;

function Lesson() {
  return (
    <LessonContainer maxWidth="md">
      <StyledTypography variant="h3" align="center">
        AR 数学课程
      </StyledTypography>
      <StyledTypography variant="body1">
        在这里，你将学习到 AR 数学的各种知识。这门课程将带你领略 AR 数学的奥秘，让你在学习的过程中享受到更多的乐趣。
      </StyledTypography>
    </LessonContainer>
  );
}

export default Lesson;
