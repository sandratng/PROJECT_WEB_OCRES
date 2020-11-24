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
  useTheme
} from '@material-ui/core';
import { useSnackbar } from "notistack";
import { useEffect} from "react";

import NewItem from "./NewItem";
import ProgressBar from "./progressBar";
import ItemsToDoList from "./ItemsToDoList";
import { get as getOption } from "./options";
import { create, load, save } from "./Items";



const ref = createRef();
const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));


export default function ToDoList2() {
    
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
    // List of all items
    const [items, setItems] = useState([]);
    // String to filter items
    const [filter, setFilter] = useState("");
    // Other hooks
    const { enqueueSnackbar } = useSnackbar();
  
    // On first render load items
    useEffect(() => {
      // Load items
      load()
        // Filter !deleted
        .then(items => items.filter(({ deleted }) => !deleted))
        // Set state
        .then(items => setItems(items))
        .catch(err => {
          console.error(err);
          enqueueSnackbar(err.message, { variant: "error" });
        });
    }, [enqueueSnackbar]);
  
    // When an item changes save items
    useEffect(() => {
      save(items).catch(err => {
        console.error(err);
        enqueueSnackbar(err.message, { variant: "error" });
      });
    }, [enqueueSnackbar, items, items.length]);
  
    const handleCreateItem = value => {
      create(value)
        .then(item => setItems([...items, item]))
        .catch(err => {
          console.error(err);
          enqueueSnackbar(err.message, { variant: "error" });
        });
    };
  
    const handleFilter = value => setFilter(value);
  
    const handleChangeItems = items => setItems(items.slice());

    return (
        <Card >
        <CardHeader title="To Do List" />
        
          
        <Divider />
        <CardContent>
        <NewItem onChange={handleFilter} onEnter={handleCreateItem} />
        <ProgressBar items={items} />
        <ItemsToDoList
          filter={getOption("filter", v => v === "true") ? filter : ""}
          items={items}
          onChange={handleChangeItems}
        />
        </CardContent>
      </Card>
    );
  }


 

