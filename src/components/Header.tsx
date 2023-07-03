import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
      <header className={'banner'}>
        <h1 className={'banner_title'}>Inspiration Note</h1>
        <p className={'banner_description'}>Record your thoughts with inspired content</p>
      </header>
  );
};

export default Header;