import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
          MedFlex
        </Typography>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
        <Button color="inherit" component={Link} to="/post-job">Post a Job</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
