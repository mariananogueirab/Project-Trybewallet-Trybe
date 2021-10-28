// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES_SUCCESS, TYPE_EXPENSES, GET_CURRENCY } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  currency: 'BRL',
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case GET_CURRENCIES_SUCCESS:
    return { ...state, currencies: action.payload };
  case TYPE_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case GET_CURRENCY:
    return { ...state, currency: action.payload };
  default:
    return state;
  }
};

export default wallet;
