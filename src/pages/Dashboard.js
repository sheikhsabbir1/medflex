import React from 'react';
import { Typography, Grid, Card, CardContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  card: {
    margin: theme.spacing(2),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Active Jobs
              </Typography>
              <Typography variant="h3" color="textSecondary">
                12
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Pending Applications
              </Typography>
              <Typography variant="h3" color="textSecondary">
                45
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Recent Hires
              </Typography>
              <Typography variant="h3" color="textSecondary">
                7
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Post a Job
      </Button>
    </div>
  );
};

export default Dashboard;
