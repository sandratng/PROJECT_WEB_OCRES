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
  textField: {
    width: '20ch'
  }
}));

const AdminSommeil = ({ className, ...rest }) => {
  const classes = useStyles();

  const defaultDate = new Date()

  const [date, setDate] = useState(formatDate(defaultDate))
  const [sleep, setSleep] = useState("08:00")

  const onSubmit = async () => {
    const sleepAmount = stringToMinutes(sleep)

    const data = {
      "date": date,
      "sleep_amount": sleepAmount
    }

    const res = await fetch('http://localhost:8000/sleep/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest} display="flex">
      <CardHeader title="Tu as bien dormi ?" />
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
                label="Temps de sommeill"
                type="time"
                value={sleep}
                onChange={e => setSleep(e.target.value)}
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
                  onClick={()=>{ alert('Temps de sommeil enregistré.'); }}
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

AdminSommeil.propTypes = {
  className: PropTypes.string
};

export default AdminSommeil;
