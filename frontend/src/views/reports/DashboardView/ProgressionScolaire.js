import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Divider,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProgressionScolaire = ({ className, ...rest }) => {
  const classes = useStyles();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetch('http://localhost:8000/grades', {
        method: 'GET'
      });

      const jsonData = await fetchedData.json();
      const grade = jsonData.reduce(
        (acc, amount) => [...acc, amount.grade],
        []
      );

      const semester = jsonData.reduce(
        (acc, amount) => [...acc, amount.semester],
        []
      );

      setData({
        datasets: [
          {
            data: grade.reverse(),
            label: 'Moyennes semestrielles',
            borderColor: '#3e95cd',
            fill: false
          }
        ],

        labels: semester.reverse()
      });
    };

    fetchData();
  }, []);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Progression scolaire" />
      <Divider />
      <CardContent>
        <Box height={200} position="relative">
          <Line
            data={data}
            options={{
              legend: {
                display: false
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      max: 20,
                      min: 0,
                      stepSize: 4
                    }
                  }
                ]
              }
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProgressionScolaire;
