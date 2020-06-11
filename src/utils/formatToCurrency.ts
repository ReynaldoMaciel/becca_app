import numeral from 'numeral'

export default (value: Numeral) => {
  if (!numeral.locales['br']) {
    numeral.register('locale', 'br', {
      delimiters: {
        thousands: '.',
        decimal: ',',
      },
      abbreviations: {
        thousand: 'mil',
        million: 'milhões',
        billion: 'b',
        trillion: 't',
      },
      ordinal: () => 'o',
      currency: {
        symbol: 'R$ ',
      },
    });
    numeral.locale('br');
  }
  return value.format('$0,0.00', Math.floor)
}