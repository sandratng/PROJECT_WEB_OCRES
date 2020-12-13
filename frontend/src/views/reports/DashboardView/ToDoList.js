import React,{useEffect,useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
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
  const refreshPage = async()=>{
    window.location.reload(false);
  }
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

  const [id, setId] = useState([]);

  const onChange = async (numero) => {
    const fetchData = async () => {
      const fetchedData = await fetch('http://localhost:8000/todotlist/todo/4', {
        method: 'GET'
      });
      const jsonData = await fetchedData.json();
      const ids = jsonData.reduce(
        (acc,amount) => [...acc, amount._id],
        []
      );

      setId(
        ids
      )
      console.log(ids);
      var recherche ='http://localhost:8000/todotlist/'+ids[numero];
      
      console.log(recherche);

      const res = await fetch(recherche, {
      method: 'DELETE'
      
    });
    }
    
    fetchData();
    //refreshPage(); 
  
  };
 
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="To Do List" />   
      <Divider />
      <CardContent>      
        <NewItem/>

        {tachelist.map((item,idTaches)=>
        (
          
          <ListItem key={idTaches}

           >
          <ListItemIcon >
          
            <input
              type="checkbox"
              onClick={() => {
                
                  onChange(idTaches);
                  
                }}
            />
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



