import React from 'react';
import loading from './images/loading.svg';
import './css/header.css';

const Header = ({ isLoading }) => {
  return (
    <header className="main-header">
      <svg className="main-header__logo" viewBox="0 0 100 18">
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ryanair-logo" fill="white"></use>
      </svg>
      <div className="main-header__loading">
        { isLoading && <img src={ loading } alt="Loading Data"/> }
      </div>
    </header>
  )
}

export default Header;
