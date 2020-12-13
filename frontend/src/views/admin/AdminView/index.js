import React,{useEffect,useState} from 'react';
import { Container, makeStyles, Grid, GridList, TextField } from '@material-ui/core';
import Page from 'src/components/Page';
import AdminSommeil from './AdminSommeil';
import AdminSport from './AdminSport';
import AdminBanque from './AdminBanque';
import AdminNotes from './AdminNotes';
import ButtonName from './ButtonName';
import AjouterUtilisateur from './AjouterUtilisateur';
import SuppUtilisateur from './SuppUtilisateur';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

let users =[];
//var buttonName;

const AdminView = () => {
  const classes = useStyles();
  const [buttonName, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetch('http://localhost:8000/users', {
        method: 'GET'
      });

      const jsonData = await fetchedData.json();    
/*
      const buttonName = jsonData.reduce(
        (acc, amount) => [...acc, amount.nom],
        []
      );


      setData(
        
         {
        href:'/app/dashboard',
        nom: buttonName
      }); 
    };*/
         
      for(var i=0;i<jsonData.length;i++){
        
        users.push({
          
          id: jsonData[i]._id,
          nom: jsonData[i].nom,
          prenom: jsonData[i].prenom,
          age: jsonData[i].age
        });
      }
      for(var u=0;u<users.length;u++){
        setData ([...buttonName,{href: '/app/dashboard',title: users[i].prenom, nom: users[i].nom,
        age: users[i].age}])}
    };
  

    fetchData();

  }, []);

 
/*
  for(var i=0;i<users.length;i++){

  buttonName.push(
    {
      href: '/app/dashboard',
      title: users[i].prenom,
      nom: users[i].nom,
      age: users[i].age,
    }
  );
*/
/*
for(var i=0;i<users.length;i++){


    buttonName.push(
      {
        href: '/app/dashboard',
        title: users[i].prenom,
        nom: users[i].nom,
        age: users[i].age,
      }
    );
}
*/





  return (

    <Page className={classes.root} title="ECE Dashboard - Admin">
      <Container maxWidth={false}>
        <GridList cellHeight={60} className={classes.gridList} cols={10}>
          <TextField value={ButtonName.nom}/>
          {buttonName.map(buttonName => (
            <ButtonName href={buttonName.href} title={buttonName.nom} />
          ))}
        </GridList>
        <Grid container spacing={3}>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <AdminSommeil />
          </Grid>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <AdminSport />
          </Grid>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <AdminBanque />
          </Grid>
          <Grid item lg={12} sm={12} md={12} xs={12}>
            <AdminNotes />
          </Grid>
          <Grid item lg={6} sm={6} md={6} xs={12}>
            <AjouterUtilisateur />
          </Grid>
          <Grid item lg={6} sm={6} md={6} xs={12}>
            <SuppUtilisateur />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default AdminView;
