export const TYPE_USER = 'TYPE_USER';
export const TYPE_CURRENCIES = 'TYPE_CURRENCIES';
export const TYPE_EXPENSES = 'TYPE_EXPENSES';

export const setUser = (payload) => ({
  type: TYPE_USER,
  payload,
});

export const setCurrencies = (payload) => ({
  type: TYPE_CURRENCIES,
  payload,
});

export const setExpenses = (payload) => ({
  type: TYPE_EXPENSES,
  payload,
});
