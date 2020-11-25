import React from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import AdminSommeil from './AdminSommeil';
import AdminSport from './AdminSport';
import AdminBanque from './AdminBanque';
import AdminNotes from './AdminNotes';
import ButtonNames from './ButtonNames';

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

  return (
    <Page className={classes.root} title="ECE Dashboard - Admin">
      <Container maxWidth={false}>
      <ButtonNames lg={12} sm={12} md={12} xs={12}/>
        <AdminSommeil lg={12} sm={12} md={12} xs={12}/>
        <AdminSport lg={12} sm={12} md={12} xs={12}/>
        <AdminBanque lg={12} sm={12} md={12} xs={12}/>
        <AdminNotes lg={12} sm={12} md={12} xs={12}/>
        <Box mt={3}></Box>
      </Container>
    </Page>
  );
};

export default AdminView;
