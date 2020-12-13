import React,{useState} from 'react';
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
  Divider,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  buttonName: {
    marginRight: theme.spacing(1)
  },
  textField: {
    width: '20ch'
  }
}));

const AdminBanque = ({ className, ...rest }) => {
  const classes = useStyles();
    const defaultDate = new Date();
  
    const [debit, setDebit] = useState();
    const [credit, setCredit] = useState();
    const [solde, setSolde] = useState();
    const refreshPage = async()=>{
      window.location.reload(false);
    }
    const onSubmit = async () => {
  
      const data = {

        solde: parseFloat(solde),
        debit: parseFloat(debit),
        credit: parseFloat(credit)
      };
  
      const res = await fetch('http://localhost:8000/bank/', {
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
      <CardHeader title="Ton argent" />
      <Divider />
      <CardContent display="flex">
        <form onSubmit={e => {
            e.preventDefault();
            onSubmit();
          }}>
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
                id="debit"
                type="number"
                label="Débit (€)"
                className={classes.textField}
              
                onChange={e => setDebit(e.target.value)}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  inputProps: {
                    min: 0,
                    step: 0.01
                  }
                }}
              />
            </Grid>
            <Grid item display="flex">
            <TextField
                required
                id="credit"
                type="number"
                label="Crédit (€)"
                className={classes.textField}
                onChange={e => setCredit(e.target.value)}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  inputProps: {
                    min: 0,
                    step: 0.01
                  }
                }}
              />
            </Grid>
            <Grid item display="flex">
            <TextField
                required
                id="solde"
                type="number"
                label="Solde (€)"
                className={classes.textField}
                onChange={e => setSolde(e.target.value)}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  inputProps: {
                    step: 0.01
                  }
                }}
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
                  onClick={()=>{ alert('Solde bancaire mis à jour.'); }}
                >
                  Valider
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

AdminBanque.propTypes = {
  className: PropTypes.string
};

export default AdminBanque;
