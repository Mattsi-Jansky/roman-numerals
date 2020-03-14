const print = (letter, times) => Array.from(new Array(times)).reduce(acc => acc + letter,'')
const numerals = [
  {decimal: 1, glyph: 'I'},
  {decimal: 5, glyph: 'V'},
  {decimal: 10, glyph: 'X'}
]

const parse = (i) => {
  let result = ''

  const remainder = i % 5
  const fives = i / 5

  if(Math.floor(fives) == 0) {
    if(remainder <= Math.ceil(5 / 2)) {
      result += print('I', i)
    }
    else {
      result += print('I', 5 - remainder)
      result += print('V', 1)
    }
  }
  else {
    result += print('V', Math.floor(fives))
    result += print('I', remainder)
  }

  return result
}

module.exports = { findBestFittingNumeral, parse }
