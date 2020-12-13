import React, { createRef, useState } from "react";

import {
  IconButton,
  InputAdornment,
  Button,
  List,
  ListItem,
  TextField
} from "@material-ui/core";

import AddCircleIcon from "@material-ui/icons/AddCircle";

const ref = createRef();

export default function NewItem({ onEnter = () => {}, onChange = () => {} }) {
  const [value, setValue] = useState("");
/*
  const handleAddItem = () => {
    onEnter(value);
    setValue("");
    onChange("");
    ref.current.focus();
  };

  const handleKeyPress = ({ key }) => {
    if (key === "Enter") {
      handleAddItem();
    }
  };

  const handleChange = ({ target: { value } }) => {
    setValue(value);
    onChange(value);
  };*/


  const [tache, setTache] = useState();

  const onSubmit = async () => {
    const data = {
      tache: tache,
      
    };

    const res = await fetch('http://localhost:8000/todolist/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
  };

  return (
    <List>
      <form
    onSubmit={e => {
      e.preventDefault();
      onSubmit();
    }}
    >
      <ListItem>
        <TextField
        required
          fullWidth
          label="Ajouter une tâche"
          
                id="tache"
                type="string"
                value={tache}
                onChange={e => setTache(e.target.value)}
                
          /*
          ref={ref}
          value={value}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  title="Clique pour ajouter"
                  disabled={!value.trim()}
                  onClick={handleAddItem}
                  
                >
                  <AddCircleIcon />
                </IconButton>
              </InputAdornment>
            )
          }}*/

        />
          <Button
                  size="small"
                  variant="text"
                  type="submit"
                  style={{
                    backgroundColor: '#388A36',
                    color: 'white'
                  }}
                  onClick={() => {
                    alert('tache ajoutee');
                  }}
                >
                  Valider
         </Button>
      </ListItem>
      </form>
    </List>
  );
}