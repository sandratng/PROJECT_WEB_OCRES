import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  buttonName: {
    marginRight: theme.spacing(1)
  },
  textField: {
    width: '20ch'
  },
}));

const ButtonNames = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest} display="flex">
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
      <Box mt={2} display="flex" alignItems="center"></Box>
    </div>
  );
};

ButtonNames.propTypes = {
  className: PropTypes.string
};

export default ButtonNames;
