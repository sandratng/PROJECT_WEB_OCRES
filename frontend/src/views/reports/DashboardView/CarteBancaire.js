import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import logoSGpng from './logoSGpng.png';
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

const CarteBancaire = ({ className, ...rest }) => {
  const classes = useStyles();

  /*const data = [
        {nom:"Da silva",
        prenom:"Elena",
        numéro :'9999 8888 7777 6666'
    },
    {nom:"Anjou",
    prenom:"Paul",
    numéro :'9999 8888 7777 6666'
    }
 

    ];*/

  return (
    <Card className={clsx(classes.root, className)} {...rest} display="flex">
      <CardHeader title="Carte de crédit" />
      <Divider />
      <CardContent display="flex">
      <Box height={130} position="relative">
        <Grid
          container
          display="flex"
          flex-direction="row"
          justify="space-between"
          spacing={10}
        >
          <Grid item display="flex">
            <img src={logoSGpng} alt="Logo" />;
            <Typography color="Red" gutterBottom variant="h4"></Typography>
          </Grid>
          <Grid item display="flex">
            <Typography gutterBottom variant="h4">
              9999 8888 7777 6666
            </Typography>
            <Typography gutterBottom variant="h5">
              CCV : 123
            </Typography>
            <Typography gutterBottom variant="h5">
              02/23
            </Typography>
          </Grid>
          <Grid item display="flex">
            <Typography gutterBottom variant="h5" color="red">
              Da Silva Elena
            </Typography>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" alignItems="center"></Box>
        </Box>
      </CardContent>
    </Card>
  );
};

CarteBancaire.propTypes = {
  className: PropTypes.string
};

export default CarteBancaire;
