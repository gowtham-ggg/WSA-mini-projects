import React from 'react';
import logo from '../assests/wsa-logo.svg'

const Header = () => {
  return (
    <div
      className="header"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
      }}
    >
      <img
        src={logo}
        alt="wsaIcon"
        style={{
          height: '40px',
        }}
      />
      <p
        style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#333',
          margin: 0,
        }}
      >
        Weather
      </p>
    </div>
  );
};

export default Header;
