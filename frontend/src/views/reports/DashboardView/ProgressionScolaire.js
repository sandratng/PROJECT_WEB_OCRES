import React from 'react';
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

  const data = {
    labels: ["S1", "S2", "S3", "S4", "S5"],
    datasets: [
      {
        data: [3, 16, 13, 12.1, 18],
        label: 'Moyennes semestrielles',
        borderColor: '#3e95cd',
        fill: false
      },
    ]
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Progression scolaire" />
      <Divider />
      <CardContent>
        <Box height={256} position="relative">
          <Line data={data} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProgressionScolaire;
