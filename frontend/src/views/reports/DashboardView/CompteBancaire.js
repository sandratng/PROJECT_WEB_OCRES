import React, {useState,useEffect} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Divider,
  CardHeader,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const CompteBancaire = ({ className, ...rest }) => {
  const classes = useStyles();
  const [credit, setCredit] = useState();
  const [debit,setDebit] = useState();
  const [solde,setSolde] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetch('http://localhost:8000/bank', {
        method: 'GET'
      });

      const jsonData = await fetchedData.json();

      const credits = jsonData.reduce(
        (acc, amount) => [...acc, amount.credit],
        []
      );

      const debits = jsonData.reduce(
        (acc,amount) => [...acc, amount.debit],
        []
      );
      const soldes = jsonData.reduce(
        (acc,amount) => [...acc, amount.solde],
        []
      );

        console.log({soldes});
        console.log({credits});
        console.log({debits});
        const soldes2=soldes.reverse();
        const debits2=debits.reverse();
        const credits2=credits.reverse();
        
      setSolde(
        soldes2[0]
      );
      setDebit(
        debits2[0]
      );
      setCredit(
        credits2[0]
      );
      
    };


    fetchData();
  }, []);
  /*const data = [
    { titre: 'Dernier Débit', somme: '-10,99€' },
    { titre: 'Dernier Crédit', somme: '+52€' },
    { titre: 'Solde', somme: '531,37€' }
  ];*/

  return (
    <Card className={clsx(classes.root, className)} {...rest} display="flex">
      <CardHeader title="Solde Bancaire" />
      <Divider />
      <CardContent display="flex">
        <Box height={100} position="relative">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={10}
          >
            <Grid item display="flex">
              
              <Typography
                color="Red"
                gutterBottom
                variant="h4"
                style={{ color: 'red' }}
              >
                -{debit} €
              </Typography>
              <Typography
                color="Red"
                gutterBottom
                variant="h6"
                style={{ color: 'Black' }}
              >
                Dernier débit
              </Typography>
            </Grid>
            <Grid item display="flex">
              <Typography
                gutterBottom
                variant="h4"
                color="red"
                style={{ color: 'green' }}
              >
                +{credit} €
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                color="red"
                style={{ color: 'Black' }}
              >
                Dernier crédit
              </Typography>
            </Grid>
            <Grid item display="flex">
              <Typography
                gutterBottom
                variant="h4"
                color="red"
                style={{ color: 'blue' }}
              >
                +{solde} €
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                color="red"
                style={{ color: 'Black' }}
              >
                Solde
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

CompteBancaire.propTypes = {
  className: PropTypes.string
};

export default CompteBancaire;
