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
  FormControl,
  InputLabel,
  Input,
  InputAdornment
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

  const [values, setValues] = React.useState({
    amount: '',
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

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
              <FormControl fullWidth className={classes.textField}>
                <InputLabel>
                  Dernier débit
                </InputLabel>
                <Input
                  id="debit"
                  value={values.amount}
                  onChange={handleChange('amount')}
                  startAdornment={
                    <InputAdornment position="end">€</InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item display="flex">
            <FormControl fullWidth className={classes.textField}>
                <InputLabel>
                  Dernier crédit
                </InputLabel>
                <Input
                  id="credit"
                  value={values.amount}
                  onChange={handleChange('amount')}
                  startAdornment={
                    <InputAdornment position="end">€</InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item display="flex">
            <FormControl fullWidth className={classes.textField}>
                <InputLabel>
                  Solde
                </InputLabel>
                <Input
                  id="solde"
                  value={values.amount}
                  onChange={handleChange('amount')}
                  startAdornment={
                    <InputAdornment position="end">€</InputAdornment>
                  }
                />
              </FormControl>
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
