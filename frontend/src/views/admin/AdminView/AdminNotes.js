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
  textField: {
    width: '20ch'
  }
}));

const AdminNotes = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Box mt={3}>
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
          <Grid item display="flex">
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
          <Grid item display="flex">
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
      </CardContent>
    </Card>
    </Box>
  );
};

AdminNotes.propTypes = {
  className: PropTypes.string
};

export default AdminNotes;
