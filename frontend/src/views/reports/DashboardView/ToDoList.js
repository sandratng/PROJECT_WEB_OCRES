import React,{useEffect,useState } from 'react';
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

  const [tachelist, setTache] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetch('http://localhost:8000/todotlist/todo/4', {
        method: 'GET'
      });

      const jsonData = await fetchedData.json();

      const taches = jsonData.reduce(
        (acc, amount) => [...acc, amount.tache],
        []
      );

        console.log({taches});
      setTache(
        taches
      );
    };

    fetchData();
  }, []);





  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="To Do List" />
      
        
      <Divider />

      <CardContent>
       

        <NewItem/>
        {tachelist.map(item=>
        (
          <ListItem >
          <ListItemIcon>
            <Checkbox/>
              </ListItemIcon>
                <TextField 
                value={item}
                
                />

        </ListItem>
        )
        
        )}
        
       
      </CardContent>
    </Card>
  );
};

ToDoList.propTypes = {
  className: PropTypes.string
};

export default ToDoList;



