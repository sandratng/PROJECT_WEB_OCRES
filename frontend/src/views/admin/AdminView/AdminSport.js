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
    width: '20ch'
  }
}));

const AdminSport = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
      <Card className={clsx(classes.root, className)} {...rest} display="flex">
        <CardHeader title="Tu as fait du sport ?" />
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
              <form className={classes.container} noValidate>
                <TextField
                  required
                  id="date"
                  label="Date"
                  type="date"
                  defaultValue="2020-11-30"
                  className={classes.textField}
                />
              </form>
            </Grid>
            <Grid item display="flex">
              <form className={classes.container} noValidate>
                <TextField
                  required
                  id="time"
                  label="Temps"
                  type="time"
                  defaultValue="07:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </form>
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
                  onClick={()=>{ alert('Temps de sport enregistré.'); }}
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

AdminSport.propTypes = {
  className: PropTypes.string
};

export default AdminSport;
