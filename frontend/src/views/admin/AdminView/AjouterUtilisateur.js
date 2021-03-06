import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Grid,
  Divider
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {},
  buttonName: {
    marginRight: theme.spacing(1)
  },
  textField: {
    width: '20ch'
  }
}));

const AjouterUtilisateur = ({ className, ...rest }) => {
  const classes = useStyles();
  const [prenom, setPrenom] = useState();
  const [nom, setNom] = useState();
  const [age, setAge]= useState();
  const refreshPage = async()=>{
    window.location.reload(false);
  }
  const onSubmit = async () => {

    const data = {
      nom: nom,
      prenom: prenom,
      age: age
    };
    const res = await fetch('http://localhost:8000/users/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    refreshPage();
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest} display="flex">
      <CardHeader title="Ajouter un utilisateur" />
      <Divider />
      <CardContent display="flex">
      <form
          onSubmit={e => {
            e.preventDefault();
            onSubmit();
          }}
          >
          <Grid
            container
            display="flex"
            flex-direction="row"
            justify="space-between"
            spacing={5}
          >
            <Grid item display="flex">
              <TextField
                required
                id="addPrenom"
                label="Prénom"
                
                onChange={e => setPrenom(e.target.value)}
                className={classes.textField}
              />
            </Grid>
            <Grid item display="flex">
              <TextField
                required
                id="addNom"
                label="Nom"
                
                onChange={e => setNom(e.target.value)}
                className={classes.textField}
              />
            </Grid>
            <Grid item display="flex">
              <TextField
                required
                id="addAge"
                label="Age"
                
                onChange={e => setAge(e.target.value)}
                className={classes.textField}
              />
            </Grid>
            <Grid item display="flex">
              <Box display="flex" justifyContent="flex-end" p={2}>
                <Button
                  size="small"
                  variant="text"
                  type="submit"
                  style={{
                    backgroundColor: '#388A36',
                    color: 'white'
                  }}
                >
                  Ajouter
                </Button>
              </Box>
            </Grid>
            
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

AjouterUtilisateur.propTypes = {
  className: PropTypes.string
};

export default AjouterUtilisateur;
