import getCurrencies from '../services/api';

export const TYPE_USER = 'TYPE_USER';
export const TYPE_EXPENSES = 'TYPE_EXPENSES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCY = 'GET_CURRENCY';
/* export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR'; */

export const setUser = (payload) => ({
  type: TYPE_USER,
  payload,
});

export const setExpenses = (payload) => ({
  type: TYPE_EXPENSES,
  payload,
});

export const getCurrenciesSucess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  const currencies = await getCurrencies();
  const payload = Object.keys(currencies).filter((currency) => currency !== 'USDT'); // tá saindo um array com as siglas, tirando o USDT
  dispatch(getCurrenciesSucess(payload));
};

export const setCurrency = (payload) => ({
  type: GET_CURRENCY,
  payload,
});
