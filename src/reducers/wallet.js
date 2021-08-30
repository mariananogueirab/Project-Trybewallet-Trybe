// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { TYPE_CURRENCIES, TYPE_EXPENSES } from '../actions';

const initialState = {
  currencies: ['BRL'],
  expenses: [0],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case TYPE_CURRENCIES:
    return { ...state, currencies: [...state.currencies, action.payload] };
  case TYPE_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default wallet;
