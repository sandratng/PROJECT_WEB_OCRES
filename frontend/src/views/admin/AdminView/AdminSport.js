import React, { useState } from 'react';
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
import { formatDate, stringToMinutes } from 'src/utils/date';

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

  const defaultDate = new Date();

  const [date, setDate] = useState(formatDate(defaultDate));
  const [sport, setSport] = useState('01:00');

  const onSubmit = async () => {
    const sportAmount = stringToMinutes(sport);

    const data = {
      date: date,
      sport_amount: sportAmount
    };

    const res = await fetch('http://localhost:8000/sport/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest} display="flex">
      <CardHeader title="Tu as fait du sport ?" />
      <Divider />
      <CardContent display="flex">
        <form
          onSubmit={e => {
            e.preventDefault();
            onSubmit();
          }}
        >
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
                id="date"
                label="Date"
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item display="flex">
              <TextField
                required
                id="time"
                label="Temps"
                type="time"
                value={sport}
                onChange={e => setSport(e.target.value)}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
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
                  onClick={() => {
                    alert('Temps de sport enregistré.');
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

AdminSport.propTypes = {
  className: PropTypes.string
};

export default AdminSport;
