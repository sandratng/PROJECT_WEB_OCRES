import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Icon,
  makeStyles,
  Grid
} from '@material-ui/core';
import API_WEATHER from './API_Weather';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const Meteo = ({ className, ...rest }) => {
  const classes = useStyles();

  const [currentCity, setCurrentCity] = useState('');
  const [nextCity, setNextCity] = useState('');

  const onCityChanged = () => {
    setCurrentCity(nextCity);
  };

  useEffect(() => {
    const updateWeather = () => {
      const newCity = `${currentCity}`;
      const apiWeather = new API_WEATHER(newCity);
      // Appel de la fonction fetchTodayForecast

      apiWeather
        .fetchTodayForecast()
        .then(function(response) {
          // Récupère la donnée d'une API
          const data = response.data;

          // On récupère l'information principal
          const main = data.weather[0].main;
          const description = data.weather[0].description;
          const temp = data.main.temp;
          const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

          // Modifier le DOM
          document.getElementById('today-forecast-main').innerHTML = main;
          document.getElementById(
            'today-forecast-more-info'
          ).innerHTML = description;
          document.getElementById('icon-weather-container').innerHTML = icon;
          document.getElementById(
            'today-forecast-temp'
          ).innerHTML = `${temp}°C`;
        })
        .catch(function(error) {
          // Affiche une erreur
          console.error(error);
        });
    };

    updateWeather();
  }, [currentCity]);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Météo" />
      <Divider />
      <CardContent>
        <Box height={200} position="relative">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item display="flex">
              <input
                id="city-input"
                type="text"
                className="form-control"
                placeholder="Rentrer le nom d'une ville"
                value={nextCity}
                onChange={e => setNextCity(e.currentTarget.value)}
              />
            </Grid>
            <Grid item display="flex">
              <button
                id="city-input-button"
                className="btn btn-success"
                type="submit"
                onClick={() => onCityChanged()}
              >
                Actualiser
              </button>
            </Grid>
            <Grid item display="flex">
              <Typography variant="h2" id="today-forecast-main"></Typography>
            </Grid>
            <Grid item display="flex">
              <Typography
                variant="h4"
                id="today-forecast-more-info"
              ></Typography>
            </Grid>
            <Grid item display="flex">
              <Icon id="icon-weather-container"></Icon>
            </Grid>
            <Grid item display="flex">
              <Typography variant="h5" id="today-forecast-temp"></Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

Meteo.propTypes = {
  className: PropTypes.string
};

export default Meteo;
