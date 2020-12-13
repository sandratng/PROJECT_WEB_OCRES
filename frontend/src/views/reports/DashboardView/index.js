import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Sommeil from './Sommeil';
import Meteo from './Meteo';
import ToDoList from './ToDoList';
import ProgressionScolaire from './ProgressionScolaire';
import Sport from './Sport';
import CompteBancaire from './CompteBancaire';
import Jokes from './Jokes';
import Devise from './Devise';
import API_Covid from './API_Covid';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="ECE Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={5} sm={6} md={5} xs={12}>
            <Sommeil />
          </Grid>

          <Grid item lg={3} sm={6} md={3} xs={12}>
            <Meteo />
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={12}>
            <ToDoList />
          </Grid>

          <Grid item lg={5} md={5} sm={6} xs={12}>
            <ProgressionScolaire />
          </Grid>

          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Sport />
          </Grid>

          <Grid item lg={12} sm={12} md={12} xs={12}>
            <CompteBancaire />
          </Grid>

          <Grid item lg={6}  md={6} sm={6} xs={12}>
            <Devise />
          </Grid>

          <Grid item lg={6}  md={6} sm={6} xs={12}>
            <Jokes />
          </Grid>

          <Grid item lg={12}  md={12} sm={12} xs={12}>
            <API_Covid />
          </Grid>

        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
