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
  Typography
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

      const idTaches = jsonData.reduce(
        (acc,amount) => [...acc, amount._id],
        []
      );

        console.log({taches});
        console.log({idTaches});
        
      setTache(
        taches,
        idTaches
      );
    };


    fetchData();
  }, []);

  const [tache2, setTache2] = useState();
  const onChange = async () => {
   // fetchData();
    var recherche;
    console.log(tachelist.idTaches);


    const res = await fetch('http://localhost:8000/todotlist/:id', {
      method: 'DELETE'
      
    });
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="To Do List" />   
      <Divider />
      <CardContent>      
        <NewItem/>

        {tachelist.map((item,idTaches)=>
        (
          
          <ListItem key={idTaches}>
          <ListItemIcon >
            <Checkbox />
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



