import React, { Component } from 'react';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Typography,
  Grid,
  CardContent
} from '@material-ui/core';

class API_Covid extends Component {
  constructor() {
    super();
    this.state = {
      valeur: {}
    };
  }

  getData = async () => {
    try {
      const response = await fetch(
        'https://covid-19-data.p.rapidapi.com/totals',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key':
              '8059505a7dmsha57d19ea283ff70p1bfe22jsn243552c39b68',
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
          }
        }
      );

      const data = await response.json();

      return data;
    } catch (error) {
      return { code: error.code, message: error.message };
    }
  };

  componentDidMount() {
    this.getData().then(data => {
      this.setState({ valeur: data[0] });
      console.log(this.state.valeur);
    });
  }

  render() {
    return (
      <Card>
        <CardHeader title="Statistique mondiale Covid 19" />
        <Divider />
        <CardContent display="flex">
        <Box height={150} position="relative">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={5}
          >
            <Grid item display="flex">
              <Typography
                gutterBottom
                variant="h5"
                style={{ color: '#7B4997' }}
              >
                Cas confirmés
              </Typography>
              <Typography gutterBottom variant="h6">
                {this.state.valeur.confirmed}
              </Typography>
            </Grid>
            <Grid item display="flex">
              <Typography
                gutterBottom
                variant="h5"
                style={{ color: '#7B4997' }}
              >
                Cas critiques
              </Typography>
              <Typography gutterBottom variant="h6">
                {this.state.valeur.critical}
              </Typography>
            </Grid>
            <Grid item display="flex">
              <Typography
                gutterBottom
                variant="h5"
                style={{ color: '#7B4997' }}
              >
                Nombre de décès
              </Typography>
              <Typography gutterBottom variant="h6">
                {this.state.valeur.deaths}
              </Typography>
            </Grid>
            <Grid item display="flex">
              <Typography
                gutterBottom
                variant="h5"
                style={{ color: '#7B4997' }}
              >
                Nombre de rétablissement
              </Typography>
              <Typography gutterBottom variant="h6">
                {this.state.valeur.recovered}
              </Typography>
            </Grid>
          </Grid>
          <Box display="flex"
        justifyContent="flex-end"
        p={2}>
          <Typography gutterBottom variant="h6">
            Dernière mise à jour : {this.state.valeur.lastUpdate}
          </Typography>
          </Box>
        </Box>
        </CardContent>
      </Card>
    );
  }
}

export default API_Covid;
