import React from 'react';
import { Line } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import logoSGpng from './logoSGpng.png';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Divider,
    CardHeader,
    Typography,
    useTheme,
    colors,
    makeStyles
} from '@material-ui/core';
import typography from 'src/theme/typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
const useStyles = makeStyles(() => ({
    root: {}
  }));

  const CarteBancaire = ({ className, ...rest }) => {
    const classes = useStyles();
    const theme = useTheme();
  
    const data = [
        {nom:"Da silva",
        prenom:"Helena",
        numéro :'9999 8888 7777 6666'
    },
    {nom:"Anjou",
    prenom:"Paul",
    numéro :'9999 8888 7777 6666'
    }
 

    ];
    const options = {
       
        animation: false,
        cornerRadius: 20,
        layout: { padding: 0 },
        legend: { display: false },
        maintainAspectRatio: false,
        responsive: true,

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
        <Card
          className={clsx(classes.root, className)}
          {...rest}
          display="flex"
        >
            <CardHeader title='Carte de crédit'/>
            <Divider />
          <CardContent  display="flex" >
            <Grid container 
            display="flex" 
            flex-direction="row"
            justify="space-between"
            
            spacing={10}


            >
              <Grid item display="flex" >
              <img src={logoSGpng} alt="Logo" />;
                <Typography
                  color="Red"
                  gutterBottom
                  variant="h4"
                  
                >
                 
                </Typography>
             
              </Grid>
              <Grid item  display="flex">
              <Typography
                 gutterBottom
                variant="h4"
                
                >
                  9999 8888 7777 6666
                </Typography><Typography
                 gutterBottom
                variant="h5"
                
                
                >
                  CCV : 123
                </Typography>
                <Typography
                 gutterBottom
                variant="h5"
                
                
                >
                  
                  02/23
                </Typography>
              </Grid>
              <Grid item display="flex">
              <Typography
                  gutterBottom
                  variant="h5"
                color="red"
                >
                 Da Silva Helena 
                </Typography>
              </Grid>
            </Grid>
            <Box
              mt={2}
              display="flex"
              alignItems="center"
            >
                
              
            </Box>
          </CardContent>
        </Card>
      );
    };
 

CarteBancaire.propTypes = {
    className: PropTypes.string
  };

  export default CarteBancaire;