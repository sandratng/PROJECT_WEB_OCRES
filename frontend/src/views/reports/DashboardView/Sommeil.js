import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors
} from '@material-ui/core';
import { formatDate } from 'src/utils/date';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Sommeil = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetch('http://localhost:8000/sleep/days/7', {
        method: 'GET'
      });

      const jsonData = await fetchedData.json();
      const sleepAmounts = jsonData.reduce(
        (acc, amount) => [...acc, amount.sleep_amount],
        []
      );

      const dates = jsonData.reduce((acc, amount) => {
        const currentDate = new Date(amount.date);
        return [...acc, formatDate(currentDate, 'dd/MM')];
      }, []);

      setData({
        datasets: [
          {
            backgroundColor: colors.indigo[500],
            data: sleepAmounts.reverse(),
            label: 'This week'
          }
        ],
        labels: dates.reverse()
      });
    };

    fetchData();
  }, []);

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Temps de sommeil" />
      <Divider />
      <CardContent>
        <Box height={252} position="relative">
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

Sommeil.propTypes = {
  className: PropTypes.string
};

export default Sommeil;
