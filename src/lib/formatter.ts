const CURRENCY_FORMATTER = new Intl.NumberFormat('nl-NL', {
  currency: 'EUR',
  style: 'currency',
  minimumFractionDigits: 0,
});

export const formatCurrency = (amount: number) => {
  return CURRENCY_FORMATTER.format(amount);
};

const NUMBER_FORMATTER = new Intl.NumberFormat('nl-NL');

export const formatNumber = (number: number) => {
  return NUMBER_FORMATTER.format(number);
};
