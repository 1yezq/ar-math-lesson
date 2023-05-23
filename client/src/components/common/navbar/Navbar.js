import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import styled from '@emotion/styled';

const NavbarContainer = styled(AppBar)`
  background-color: #020620;
  position: fixed;
`;

export default () => 
    <NavbarContainer position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          首页
        </Button>
        <Button color="inherit" component={Link} to="/lesson1">
          第一课
        </Button>
        <Button color="inherit" component={Link} to="/lesson2">
          第二课
        </Button>
        <Button color="inherit" component={Link} to="/lesson3">
          第三课
        </Button>
      </Toolbar>
    </NavbarContainer>;