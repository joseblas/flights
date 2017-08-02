import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import AirportSelector from './AirportSelector';
import DatePicker from './DatePicker';
import Months from './Months';
import SubmitButton from './SubmitButton';
import { fetchFlights } from './actions/flights';
import { updateOrigin, updateDestination, updateFromDate, updateToDate, updateMonths } from './actions/basket';
import './css/flight-picker.css';

class FlightPicker extends Component {

  constructor(props) {
    super(props);
    this.state = { shaking: false };
  }

  validateForm() {

    const { basket } = this.props;
    const { origin, destination, fromDate, toDate, months } = basket;
    // const { origin } = basket;

    if (origin) {

      this.props.fetchFlights();

    } else {
      
      this.setState({ shaking: true });

      setTimeout(() => {
        this.setState({ shaking: false });
      }, 500);

    }

  }

  render() {

    const { basket, booking } = this.props;

    const { origin, destination } = basket;
    const { airports, routes } = booking.data;

    const errorClass = classNames({
      'shake': this.state.shaking
    });

    return (
      <div >
        {/* className="flight-picker" */}
        <div className={errorClass}>
          <div className="flight-picker__row">
            {/* className="flight-picker__row" */}

            <AirportSelector
              type="origin"
              title="From:"
              value={ origin }
              airports={ airports }
              onChange={ this.props.originChanged }
            />

            {/* <AirportSelector
              type="destination"
              title="To:"
              value={ destination }
              airports={ airports }
              origin={ origin }
              routes={ routes }
              onChange={ this.props.destinationChanged }
            /> */}

          </div>
           <div className="flight-picker__row">
             {/* className="flight-picker__row" */}

            <DatePicker
              placeholder="Fly Out"
              onSelect={ this.props.fromDateChanged }
             />

            {/* <DatePicker
              placeholder="Fly Back"
              onSelect={ this.props.toDateChanged }
            /> */}
             </div>
          <div className="flight-picker__row">
            <Months
             placeholder="until"
             onChange= {this.props.untilMonthsChanged}
            />

          </div> 
          <div className="flight-picker__row">

            <SubmitButton
              value="Find Flights"
              disabled={ this.state.shaking }
              onClick={ this.validateForm.bind(this) }
            />

          </div>
        </div>
      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
    booking: state.booking
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    originChanged: (event) => {
      const { value } = event.target;
      dispatch(updateOrigin(value));
    },
    destinationChanged: (event) => {
      const { value } = event.target;
      dispatch(updateDestination(value));
    },
    fromDateChanged: (date) => {
      dispatch(updateFromDate(date));
    },
    toDateChanged: (date) => {
      dispatch(updateToDate(date));
    },
    fetchFlights: () => {
      dispatch(fetchFlights());
    },
    untilMonthsChanged: (event) => {
      const { value } = event.target;
      dispatch(updateMonths(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightPicker);
