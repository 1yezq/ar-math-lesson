//src/components/App.js
import React, { StrictMode, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import GlobalStyle from '../styles/globalStyle';
import styled from '@emotion/styled';

const Home = lazy(() => import('./home'));
const Lesson = lazy(() => import('./lesson/Lesson'));
const NotFound = lazy(() => import('./notFound'));
const Navbar = lazy(() => import('./common/navbar'));
const BackgroundVideo = lazy(() => import('./common/background'));
const Footer = lazy(() => import('./common/footer'));

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px);
`;


function App() {
  return (
    <StrictMode>
      <GlobalStyle />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <BackgroundVideo />
          <MainContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lesson1" element={<Lesson />} />
              <Route path="/lesson2" element={<Lesson />} />
              <Route path="/lesson3" element={<Lesson />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainContainer>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;