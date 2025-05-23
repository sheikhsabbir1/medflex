import React from 'react';
import { Typography, Grid, Card, CardContent, Button, Avatar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    backgroundColor: deepPurple[500],
    margin: 'auto',
  },
  card: {
    margin: theme.spacing(2),
  },
  jobCard: {
    margin: theme.spacing(1),
  },
}));

const DoctorDashboard: React.FC = () => {
  const classes = useStyles();

  // Sample data for job matches
  const jobMatches = [
    { id: 1, title: 'Registered Nurse - Emergency Room', location: 'St. Luke\'s Hospital, Anytown, USA', payRate: '$50/hr', shiftType: 'Day Shift' },
    { id: 2, title: 'Pediatric Nurse', location: 'Children\'s Clinic, Anytown, USA', payRate: '$45/hr', shiftType: 'Night Shift' },
    { id: 3, title: 'ICU Nurse', location: 'Regional Hospital, Anytown, USA', payRate: '$55/hr', shiftType: 'Day Shift' },
  ];

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Doctor Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Avatar className={classes.avatar}>Dr. A</Avatar>
              <Typography variant="h5" component="h2" align="center" gutterBottom>
                Dr. Amelia Harper
              </Typography>
              <Typography variant="body1" color="textSecondary" align="center">
                Registered Nurse
              </Typography>
              <Typography variant="body1" color="textSecondary" align="center">
                Rating: 4.8 (120 reviews)
              </Typography>
              <Box mt={2}>
                <Button variant="contained" color="primary" fullWidth>
                  Edit Profile
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" gutterBottom>
            Job Matches
          </Typography>
          {jobMatches.map((job) => (
            <Card key={job.id} className={classes.jobCard}>
              <CardContent>
                <Typography variant="h6" component="h3">
                  {job.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Location: {job.location}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Pay Rate: {job.payRate}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Shift Type: {job.shiftType}
                </Typography>
                <Box mt={2}>
                  <Button variant="contained" color="primary">
                    Apply Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default DoctorDashboard;
