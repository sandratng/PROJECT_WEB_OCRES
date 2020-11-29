import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Divider,
  CardHeader,
  makeStyles,
  Grid
} from '@material-ui/core';
import DeviseRow from './DeviseRow';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Devise = ({ className, ...rest }) => {
  const classes = useStyles();

  const BASE_URL = 'https://api.exchangeratesapi.io/latest';

  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest} display="flex">
      <CardHeader title="Devise" />
      <Divider />
      <CardContent display="flex">
        <Box height={100} position="relative">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item display="flex">
              <DeviseRow
                currencyOptions={currencyOptions}
                selectedCurrency={fromCurrency}
                onChangeCurrency={e => setFromCurrency(e.target.value)}
                onChangeAmount={handleFromAmountChange}
                amount={fromAmount}
              />
            </Grid>
            <Grid item display="flex">
              <div className="equals">=</div>
            </Grid>
            <Grid item display="flex">
              <DeviseRow
                currencyOptions={currencyOptions}
                selectedCurrency={toCurrency}
                onChangeCurrency={e => setToCurrency(e.target.value)}
                onChangeAmount={handleToAmountChange}
                amount={toAmount}
              />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

Devise.propTypes = {
  className: PropTypes.string
};

export default Devise;
