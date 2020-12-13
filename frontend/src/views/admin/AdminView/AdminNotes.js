import React, { useState }from 'react';
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
  textField: {
    width: '22ch'
  }
}));
const refreshPage = async()=>{
  window.location.reload(false);
}
const AdminNotes = ({ className, ...rest }) => {
  const classes = useStyles();

  const [semester, setSemester] = useState('1');
  const [grade, setGrade] = useState('10');

  const onSubmit = async () => {
    const data = {
      "semester": semester,
      "grade": grade
    };

    const res = await fetch('http://localhost:8000/grades/', {
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
      <CardHeader title="Tu travailles bien ?" />
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
                className={classes.textField}
                id="numSemestre"
                label="Numéro du semestre"
                type="number"
                value={semester}
                onChange={e => setSemester(e.target.value)}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  inputProps: {
                    min: 1
                  }
                }}
              />
            </Grid>

            <Grid item display="flex">
              <TextField
                required
                id="moyenne"
                type="number"
                label="Moyenne"
                className={classes.textField}
                value={grade}
                onChange={e => setGrade(e.target.value)}
                InputLabelProps={{
                  shrink: true
                }}
                InputProps={{
                  inputProps: {
                    min: 0,
                    max: 20,
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
                  onClick={() => {
                    alert('Progression scolaire mis à jour.');
                  }}
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

AdminNotes.propTypes = {
  className: PropTypes.string
};

export default AdminNotes;
