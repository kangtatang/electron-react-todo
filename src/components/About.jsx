import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

function About() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          This app is built using React, Material-UI, and Electron. It's a simple example to demonstrate how to create a desktop application using these technologies.
        </Typography>
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1">
            We aim to provide developers with the best tools and libraries to build cross-platform desktop applications.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default About;
