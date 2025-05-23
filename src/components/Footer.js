import React from 'react';
import { Typography, Link, Box } from '@material-ui/core';

const Footer = () => {
  return (
    <Box mt={5} py={3} textAlign="center">
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} MedFlex. All rights reserved.
      </Typography>
      <Box mt={1}>
        <Link href="#" color="inherit">About</Link> |
        <Link href="#" color="inherit">Contact</Link> |
        <Link href="#" color="inherit">Privacy</Link>
      </Box>
    </Box>
  );
};

export default Footer;
