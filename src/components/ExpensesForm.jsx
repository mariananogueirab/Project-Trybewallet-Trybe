import React from 'react';
import Input from './Input';
import Select from './Select';
import { paymentMethods, tagSelect } from '../services/data';

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
  }

  render() {
    const { valor, description, currency, payment, tag } = this.state;
    return (
      <div>
        <Input
          type="text"
          label="Valor"
          value={ valor }
          name="valor"
          /* onChange={  } */
        />

        <Input
          type="text"
          label="Descrição"
          value={ description }
          name="description"
        />

        <Select
          type="text"
          label="Moeda"
          value={ currency }
          name="currency"
        />

        <Select
          type="text"
          label="Método de Pagamento"
          value={ payment }
          name="payment"
          datas={ paymentMethods }
        />

        <Select
          type="text"
          label="Tag"
          value={ tag }
          name="tag"
          datas={ tagSelect }
        />
      </div>
    );
  }
}

export default ExpensesForm;
