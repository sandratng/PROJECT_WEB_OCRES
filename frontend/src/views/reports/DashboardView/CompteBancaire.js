import React from 'react';
import { Line } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
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

  const CompteBancaire = ({ className, ...rest }) => {
    const classes = useStyles();
    const theme = useTheme();
  
    const data = [
        {titre :"Dernier Débit",
        somme :'-10,99€'
    },
    {titre :"Dernier Crédit",
        somme :'+52€'
    },
    {titre :"Solde",
        somme :'531,37€'
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
            <CardHeader title='Solde Bancaire'/>
            <Divider />
          <CardContent  display="flex" >
            <Grid container 
            display="flex" 
            flex-direction="row"
            justify="space-between"
            
            spacing={10}


            >
              <Grid item display="flex" >
              <Typography
                  color="Red"
                  gutterBottom
                  variant="h4"
                  style={ {color: "red" }}
                >
                  -10,99
                </Typography>
                <Typography
                  color="Red"
                  gutterBottom
                  variant="h6"
                  style={ {color: "Black" }}
                >
                  Dernier débit
                </Typography>
             
              </Grid>
              <Grid item  display="flex">
              <Typography
                 gutterBottom
                variant="h4"
                color="red"
                style={ {color: "green" }}
                >
                  +52,00€
                </Typography>
              <Typography
                 gutterBottom
                variant="h6"
                color="red"
                style={ {color: "Black" }}
                >
                  Dernier crédit
                </Typography>
              </Grid>
              <Grid item display="flex">

              <Typography
                  gutterBottom
                  variant="h4"
                color="red"
                style={ {color: "blue" }}
                >
                  +531,37€
                </Typography>
              <Typography
                  gutterBottom
                  variant="h6"
                color="red"
                style={ {color: "Black" }}
                >
                  Solde
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
 

CompteBancaire.propTypes = {
    className: PropTypes.string
  };

  export default CompteBancaire;