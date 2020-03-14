const print = (letter, times) => Array.from(new Array(times)).reduce(acc => acc + letter,'')
const numerals = {
  1: [
    {decimal: 1, glyph: 'I'},
    {decimal: 5, glyph: 'V'}
  ],
  10:[
    {decimal: 10, glyph: 'X'},
    {decimal: 50, glyph: 'L'},
  ],
  100: [
    {decimal: 100, glyph: 'C'},
    {decimal: 500, glyph: 'D'}
  ],
  1000: [
    {decimal: 1000, glyph: 'M'}
  ]
}

function parse(n) {
  return recurse([...n.toString()])
}

function recurse(digits, result = '', power = 1) {
  if(digits.length == 0) return result
  
  const digit = digits.pop()
  result = recurseParse(parseInt(digit) * power, numerals[power]) + result
  return recurse(digits, result, power * 10)
}

function recurseParse(n, numerals) {
  console.log(`recurseParse ${n}, ${JSON.stringify(numerals)}`)
  if(numerals.length == 1) return print(numerals[0].glyph, n / numerals[0].decimal)
  const smallNumeral = numerals[0]
  const bigNumeral = numerals[1]
  let result = ''

  const remainder = n % bigNumeral.decimal
  const quotient = n / bigNumeral.decimal

  if(Math.floor(quotient) == 0) {
    if(remainder <= Math.ceil(bigNumeral.decimal / 2)) {
      result += print(smallNumeral.glyph, Math.floor(n / smallNumeral.decimal))
    }
    else {
      result += print(smallNumeral.glyph, bigNumeral.decimal - remainder)
      result += print(bigNumeral.glyph, 1)
    }
  }
  else {
    result += print(bigNumeral.glyph, Math.floor(quotient))
    result += print(smallNumeral.glyph, remainder)
  }

  return result
}

module.exports = { parse }
