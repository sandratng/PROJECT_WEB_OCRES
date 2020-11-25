import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Grid,
  Divider
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {},
  buttonName: {
    marginRight: theme.spacing(1)
  },
  textField: {
    width: '22ch'
  }
}));

const SuppUtilisateur = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest} display="flex">
    <CardHeader title="Tu travailles bien ?" />
    <Divider />
    <CardContent display="flex">
      <Grid
        container
        display="flex"
        flex-direction="row"
        justify="space-between"
        spacing={5}
      >
        <Grid item display="flex">
          <TextField
          required
            className={classes.textField}
            id="filled-number"
            label="Numéro du semestre"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item display="flex">
        <TextField required id="moyenne" label="Moyenne" defaultValue=" " className={classes.textField}/>
        </Grid>
        <Grid item display="flex">
          <Box display="flex" justifyContent="flex-end" p={2}>
            <Button
              size="small"
              variant="text"
              type="submit"
              style={{
                backgroundColor: 'red',
                color: 'white'
              }}
            >
              Supprimer
            </Button>
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
  );
};

SuppUtilisateur.propTypes = {
  className: PropTypes.string
};

export default SuppUtilisateur;
