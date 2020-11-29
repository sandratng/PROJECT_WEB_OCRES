import React, { Component } from 'react';
import './API_Covid.css';
import { Box, Card, CardContent, CardHeader, Divider } from '@material-ui/core';

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
        <CardContent>
          <Box height={170} position="relative">
            <div>
              <center>
                <h1>Dernière mise à jour: {this.state.valeur.lastUpdate}</h1>
              </center>

              <table className="container">
                <thead>
                  <tr>
                    <th colspan="2">Statistique du jour</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cas confirmés</td>
                    <td>{this.state.valeur.confirmed}</td>
                  </tr>
                  <tr>
                    <td>Cas critiques</td>
                    <td>{this.state.valeur.critical}</td>
                  </tr>
                  <tr>
                    <td>Nombre de morts</td>
                    <td>{this.state.valeur.deaths}</td>
                  </tr>
                  <tr>
                    <td>Nombre de rétablis</td>
                    <td>{this.state.valeur.recovered}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Box>
        </CardContent>
      </Card>
    );
  }
}

export default API_Covid;
