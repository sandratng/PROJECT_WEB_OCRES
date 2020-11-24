import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/logo1.png"
      width="70%"
      {...props}
    />
  );
};

export default Logo;
