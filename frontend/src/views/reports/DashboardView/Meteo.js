import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const Meteo = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Météo" />
      <Divider />
      <CardContent>
        <Box height={200} position="relative">
        </Box>
      </CardContent>
    </Card>
  );
};

Meteo.propTypes = {
  className: PropTypes.string
};

export default Meteo;
