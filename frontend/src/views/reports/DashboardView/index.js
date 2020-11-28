import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Sommeil from './Sommeil';
import Meteo from './Meteo';
import ToDoList from './ToDoList';
import ProgressionScolaire from './ProgressionScolaire';
import Sport from './Sport';
import CompteBancaire from './CompteBancaire';
import LatestOrders from './LatestOrders';
import LatestProducts from './LatestProducts';

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

          <Grid item lg={4} md={6} xl={3} xs={12}>
            <LatestProducts />
          </Grid>

          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
