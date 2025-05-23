import React from 'react';
import { Typography, Button, Card, CardContent, Grid } from '@material-ui/core';
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

const JobDetails: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Registered Nurse - Emergency Room
      </Typography>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" component="h2">
            Job Details
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Location: St. Luke's Hospital, 123 Main Street, Anytown, USA
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Dates: 01/15/2024 - 01/31/2024
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Hours per week: 36
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Pay Rate: $50/hr
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Requirements: Active RN license in the state of California, BLS and ACLS certifications, Minimum 2 years of experience in an Emergency Room setting
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Budget: Hourly Rate: $50/hr, Estimated Weekly Pay: $2,700
          </Typography>
          <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Apply Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetails;
