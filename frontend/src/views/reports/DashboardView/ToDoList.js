import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  Checkbox,
  ListItem,
  TextField,
  ListItemIcon,
} from '@material-ui/core';
import NewItem from "./NewItem";

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));


const ToDoList = ({ className, ...rest }) => {
  const classes = useStyles();

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



