import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../pages/wallet.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.reduceFunc = this.reduceFunc.bind(this);
  }

  reduceFunc(data) {
    return data
      .reduce((acc, curr) => (
        acc + Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask)), 0);
  }

  render() {
    const { userEmail, userExpenses, userCurrency } = this.props;
    return (
      <header>
        <div data-testid="total-field">
          <span>Despesas Totais: </span>
          {this.reduceFunc(userExpenses)}
        </div>
        <div data-testid="header-currency-field">
          {userCurrency}
        </div>
        <div data-testid="email-field">{userEmail}</div>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  userExpenses: PropTypes.string.isRequired,
  userCurrency: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  userExpenses: state.wallet.expenses,
  userCurrency: state.wallet.currency,
});

export default connect(mapStateToProps)(Header);
