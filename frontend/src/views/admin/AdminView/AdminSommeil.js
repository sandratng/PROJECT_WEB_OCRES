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

const AdminSommeil = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          className={classes.buttonName}
          color="primary"
          variant="contained"
          href="/app/dashboard"
        >
          Elena
        </Button>
        <Button
          className={classes.buttonName}
          color="primary"
          variant="contained"
        >
          Paul
        </Button>
      </Box>
      <Box mt={3}>
        <Card>
          <CardHeader title="Tu as bien dormi ?" />
          <Divider />
          <CardContent>
            <Box height={60} position="relative">
              <Grid container justify="space-between" spacing={4}>
                <Grid item>
                  <form className={classes.container} noValidate>
                    <TextField
                      required
                      id="date"
                      label="Date"
                      type="date"
                      defaultValue="2020-05-24"
                      className={classes.textField}
                    />
                  </form>
                </Grid>
                <Grid item>
                  <form className={classes.container} noValidate>
                    <TextField
                      required
                      id="time"
                      label="Heure de coucher"
                      type="time"
                      defaultValue="18:30"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      inputProps={{
                        step: 300 // 5 min
                      }}
                    />
                  </form>
                </Grid>

                <Grid item>
                  <form className={classes.container} noValidate>
                    <TextField
                      required
                      id="time"
                      label="Heure de réveil"
                      type="time"
                      defaultValue="06:00"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                      inputProps={{
                        step: 300 // 5 min
                      }}
                    />
                  </form>
                </Grid>
                <Box display="flex" justifyContent="flex-end" p={2}>
                  <Button color="success" size="small" variant="text">
                    Valider
                  </Button>
                </Box>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

AdminSommeil.propTypes = {
  className: PropTypes.string
};

export default AdminSommeil;
