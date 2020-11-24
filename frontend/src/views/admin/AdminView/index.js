import React from 'react';
import {
  Box,
  Container,
  makeStyles,
} from '@material-ui/core';
import Page from 'src/components/Page';
import AdminSommeil from './AdminSommeil';

const useStyles = makeStyles((theme) => ({
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
    <Page
      className={classes.root}
      title="ECE Dashboard - Admin"
    >
      <Container maxWidth={false}>
        <AdminSommeil />
        <Box mt={3}>
        
        </Box>
      </Container>
    </Page>
  );
};

export default AdminView;
