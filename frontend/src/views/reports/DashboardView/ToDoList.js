import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { createRef, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  makeStyles,
  IconButton,
  InputAdornment,
  Checkbox,
  List,
  ListItem,
  TextField,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  useTheme
} from '@material-ui/core';
import { useSnackbar } from "notistack";
import { useEffect} from "react";

import NewItem from "./NewItem";




const ref = createRef();
const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));


const ToDoList = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  

  const data = {
    datasets: []
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [];

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="To Do List" />
      
        
      <Divider />
      <CardContent>
        <NewItem/>
      
        <ListItem >
          <ListItemIcon>
            <Checkbox/>
              </ListItemIcon>
                <TextField/>
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <Checkbox/>
              </ListItemIcon>
                <TextField/>
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <Checkbox/>
              </ListItemIcon>
                <TextField/>
        </ListItem>
      </CardContent>
    </Card>
  );
};

ToDoList.propTypes = {
  className: PropTypes.string
};

export default ToDoList;



