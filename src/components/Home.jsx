import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Typography variant="body1" paragraph>
        This is the home page of our Electron app using React and Material-UI.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Sample Image"
              height="140"
              image="/images/gambar.png"
              title="Sample Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Feature 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of Feature 1.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Sample Image"
              height="140"
              image="https://source.unsplash.com/random"
              title="Sample Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Feature 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of Feature 2.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Sample Image"
              height="140"
              image="https://source.unsplash.com/random"
              title="Sample Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Feature 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of Feature 3.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
