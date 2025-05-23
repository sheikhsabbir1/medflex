import React from 'react';
import { Button, Typography, Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hero: {
    background: 'linear-gradient(135deg, #2E86C1 0%, #1A5276 100%)',
    color: 'white',
    padding: theme.spacing(10, 0),
    textAlign: 'center',
  },
  featureCard: {
    margin: theme.spacing(2),
  },
  media: {
    height: 140,
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.hero}>
        <Typography variant="h2" gutterBottom>
          Hire Trusted Medical Professionals or Monetize Your Skills – Fast & Flexible.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Hire Talent
        </Button>
        <Button variant="outlined" color="secondary" size="large" style={{ marginLeft: '10px' }}>
          Find Shifts
        </Button>
      </div>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.featureCard}>
            <CardMedia
              className={classes.media}
              image="/images/verified-profiles.jpg"
              title="Verified Profiles"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Verified Profiles
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                All professionals are thoroughly vetted.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.featureCard}>
            <CardMedia
              className={classes.media}
              image="/images/instant-matching.jpg"
              title="Instant Matching"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Instant Matching
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Find the right match in minutes.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.featureCard}>
            <CardMedia
              className={classes.media}
              image="/images/secure-payments.jpg"
              title="Secure Payments"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Secure Payments
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Safe and secure transactions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
