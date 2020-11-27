import React from 'react';
import { Container, makeStyles, Grid, GridList } from '@material-ui/core';
import Page from 'src/components/Page';
import AdminSommeil from './AdminSommeil';
import AdminSport from './AdminSport';
import AdminBanque from './AdminBanque';
import AdminNotes from './AdminNotes';
import ButtonName from './ButtonName';
import AjouterUtilisateur from './AjouterUtilisateur';
import SuppUtilisateur from './SuppUtilisateur';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const AdminView = () => {
  const classes = useStyles();

  const buttonName = [
    {
      href: '/app/dashboard',
      title: 'Elena'
    },
    {
      href: '/app/admin',
      title: 'Paul'
    }
  ];

  return (
    <Page className={classes.root} title="ECE Dashboard - Admin">
      <Container maxWidth={false}>
        <GridList cellHeight={60} className={classes.gridList} cols={10}>
          {buttonName.map(buttonName => (
            <ButtonName href={buttonName.href} title={buttonName.title} />
          ))}
        </GridList>
        <Grid container spacing={3}>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <AdminSommeil />
          </Grid>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <AdminSport />
          </Grid>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <AdminBanque />
          </Grid>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <AdminNotes />
          </Grid>
          <Grid item lg={6} sm={6} md={6} xs={12}>
            <AjouterUtilisateur />
          </Grid>
          <Grid item lg={6} sm={6} md={6} xs={12}>
            <SuppUtilisateur />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default AdminView;
