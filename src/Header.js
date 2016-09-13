import React, { Component } from 'react';
import { connect } from 'react-redux';
import loading from './images/loading.svg';
import './css/header.css';

class Header extends Component {

  render() {

    const { booking, flights } = this.props;
    const showLoader = (booking.isFetching || flights.isFetching);

    return (
      <header className="main-header">
        <svg className="main-header__logo" viewBox="0 0 100 18">
          <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ryanair-logo" fill="white"></use>
        </svg>
        <div className="main-header__loading">
          { showLoader && <img src={ loading } alt="Loading Data"/> }
        </div>
      </header>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    booking: state.booking,
    flights: state.flights
  }
}

export default connect(mapStateToProps)(Header);
