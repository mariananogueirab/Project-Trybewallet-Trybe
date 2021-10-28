const URL_ECONOMIA = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  const response = await fetch(URL_ECONOMIA);
  const currencies = response.json();
  return currencies;
};

export default getCurrencies;
