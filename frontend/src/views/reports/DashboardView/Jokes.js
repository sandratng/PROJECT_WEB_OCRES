import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Divider,
  CardHeader,
  makeStyles,
  Typography,
  Grid,
  Button
} from '@material-ui/core';
import axios from 'axios';


const useStyles = makeStyles(() => ({
  root: {}
}));

const Jokes = ({ className, ...rest }) => {
  const classes = useStyles();

  const [joke, setJoke] = useState('');

  const getJoke = () => {
    axios
      .get('https://official-joke-api.appspot.com/random_joke')
      .then(response => {
        setJoke(response.data.setup + '...' + response.data.punchline);
      });
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest} display="flex">
      <CardHeader title="Une petite blague ?" />
      <Divider />
      <CardContent display="flex">
        <Box height={100} position="relative">
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={1}
          >
          <Grid item display="flex"><Button onClick={getJoke} >Clique pour une blague drôle</Button></Grid>
          <Grid item display="flex"><Typography>{joke}</Typography></Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

Jokes.propTypes = {
  className: PropTypes.string
};

export default Jokes;
