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
  Typography
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {},
  buttonName: {
    marginRight: theme.spacing(1)
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
          <CardContent>
            <Box height={60} position="relative">
              <Grid container justify="space-between" spacing={3}>
                <Grid item>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="h6"
                      >
                        Date
                      </Typography>
                    </Grid>
                    <Grid item>
                      <form className={classes.container} noValidate>
                        <TextField
                          id="date"
                          type="date"
                          defaultValue="2020-05-24"
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      </form>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="h6"
                      >
                        Heure de coucher
                      </Typography>
                    </Grid>
                    <Grid item>
                      <form className={classes.container} noValidate>
                        <TextField
                          id="time"
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
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="h6"
                      >
                        Heure de réveil
                      </Typography>
                    </Grid>
                    <Grid item>
                      <form className={classes.container} noValidate>
                        <TextField
                          id="time"
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
                  </Grid>
                </Grid>
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
