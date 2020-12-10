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
  Divider,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  buttonName: {
    marginRight: theme.spacing(1)
  },
  textField: {
    width: '20ch'
  }
}));

const AdminBanque = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest} display="flex">
      <CardHeader title="Ton argent" />
      <Divider />
      <CardContent display="flex">
        <form>
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
                id="debit"
                type="number"
                label="Débit (€)"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  inputProps: {
                    min: 0,
                    step: 0.01
                  }
                }}
              />
            </Grid>
            <Grid item display="flex">
            <TextField
                required
                id="credit"
                type="number"
                label="Crédit (€)"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  inputProps: {
                    min: 0,
                    step: 0.01
                  }
                }}
              />
            </Grid>
            <Grid item display="flex">
            <TextField
                required
                id="solde"
                type="number"
                label="Solde (€)"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  inputProps: {
                    step: 0.01
                  }
                }}
              />
            </Grid>
            <Grid item display="flex">
              <Box display="flex" justifyContent="flex-end" p={2}>
                <Button
                  size="small"
                  variant="text"
                  type="submit"
                  style={{
                    backgroundColor: '#388A36',
                    color: 'white'
                  }}
                  onClick={()=>{ alert('Solde bancaire mis à jour.'); }}
                >
                  Valider
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

AdminBanque.propTypes = {
  className: PropTypes.string
};

export default AdminBanque;
