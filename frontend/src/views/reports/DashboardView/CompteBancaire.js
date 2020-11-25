import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Divider,
  CardHeader,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const CompteBancaire = ({ className, ...rest }) => {
  const classes = useStyles();

  /*const data = [
    { titre: 'Dernier Débit', somme: '-10,99€' },
    { titre: 'Dernier Crédit', somme: '+52€' },
    { titre: 'Solde', somme: '531,37€' }
  ];*/

  return (
    <Card className={clsx(classes.root, className)} {...rest} display="flex">
      <CardHeader title="Solde Bancaire" />
      <Divider />
      <CardContent display="flex">
      <Box height={100} position="relative">
        <Grid
          container
          display="flex"
          flex-direction="row"
          justify="space-between"
          spacing={10}
        >
          <Grid item display="flex">
            <Typography
              color="Red"
              gutterBottom
              variant="h4"
              style={{ color: 'red' }}
            >
              -10,99€
            </Typography>
            <Typography
              color="Red"
              gutterBottom
              variant="h6"
              style={{ color: 'Black' }}
            >
              Dernier débit
            </Typography>
          </Grid>
          <Grid item display="flex">
            <Typography
              gutterBottom
              variant="h4"
              color="red"
              style={{ color: 'green' }}
            >
              +52,00€
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              color="red"
              style={{ color: 'Black' }}
            >
              Dernier crédit
            </Typography>
          </Grid>
          <Grid item display="flex">
            <Typography
              gutterBottom
              variant="h4"
              color="red"
              style={{ color: 'blue' }}
            >
              +531,37€
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              color="red"
              style={{ color: 'Black' }}
            >
              Solde
            </Typography>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" alignItems="center"></Box>
        </Box>
      </CardContent>
    </Card>
  );
};

CompteBancaire.propTypes = {
  className: PropTypes.string
};

export default CompteBancaire;
