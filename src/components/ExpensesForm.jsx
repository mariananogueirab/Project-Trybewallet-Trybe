import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import SelectApi from './SelectApi';
import { paymentMethods, tagSelect } from '../services/data';
import { getCurrenciesThunk, setExpenses, setCurrency } from '../actions/index';

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valor: 0,
      description: '',
      currency: '',
      payment: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
    const { getCurrency } = this.props;
    if (target.name === 'currency') {
      getCurrency(target.value);
    }
  }

  /* onSubmmit() {

  } */

  render() {
    const { valor, description, currency, payment, tag } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <Input
          type="text"
          label="Valor"
          value={ valor }
          name="valor"
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
          value={ payment }
          name="payment"
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
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  getExpensies: () => dispatch(setExpenses()),
  getCurrency: (currency) => dispatch(setCurrency(currency)),
});

ExpensesForm.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  getCurrency: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
