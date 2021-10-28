import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import SelectApi from './SelectApi';
import { paymentMethods, tagSelect } from '../services/data';
import { getCurrenciesThunk, setCurrency, getExchangeRatesThunk } from '../actions/index';
import './expensesForm.css';

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmmit = this.onSubmmit.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  onSubmmit() {
    const { getExpensies, expenses } = this.props;
    this.setState({
      id: expenses.length,
    }, () => getExpensies(this.state));
  }

  handleChange({ target }) {
    const { getCurrency } = this.props;
    if (target.name === 'currency') {
      getCurrency(target.value);
    }
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <div className="expensesForm">
        <Input
          type="number"
          label="Valor"
          value={ value }
          name="value"
          onChange={ this.handleChange }
        />
        <Input
          type="text"
          label="Descrição"
          value={ description }
          name="description"
          onChange={ this.handleChange }
        />
        <SelectApi
          type="text"
          label="Moeda"
          value={ currency }
          name="currency"
          data={ currencies }
          onChange={ this.handleChange }
        />
        <Select
          type="text"
          label="Método de Pagamento"
          value={ method }
          name="method"
          data={ paymentMethods }
          onChange={ this.handleChange }
        />
        <Select
          type="text"
          label="Tag"
          value={ tag }
          name="tag"
          data={ tagSelect }
          onChange={ this.handleChange }
        />
        <button type="button" onClick={ this.onSubmmit }>Adicionar despesa</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  getCurrency: (currency) => dispatch(setCurrency(currency)),
  getExpensies: (expense) => dispatch(getExchangeRatesThunk(expense)),
});

ExpensesForm.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  getCurrency: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getExpensies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
