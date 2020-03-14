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
  const nextPower = power * 10
  
  const digit = digits.pop()
  result = recurseParse(parseInt(digit) * power, power, nextPower) + result
  return recurse(digits, result, nextPower)
}

function recurseParse(n, power, nextPower) {
  if(power === 1000) return print(numerals[power][0].glyph, n / numerals[power][0].decimal)
  const smallNumeral = numerals[power][0]
  const bigNumeral = numerals[power][1]
  const parentNumeral = numerals[nextPower][0]
  
  let result = ''

  const remainder = n % bigNumeral.decimal
  const quotient = n / bigNumeral.decimal
  const name = n / nextPower

  if(n + smallNumeral.decimal == parentNumeral.decimal) {
    result += print(smallNumeral.glyph, 1)
    result += print(parentNumeral.glyph, 1)
  }
  else if(n + smallNumeral.decimal == bigNumeral.decimal) {
    result += print(smallNumeral.glyph, 1)
    result += print(bigNumeral.glyph, 1)
  }
  else if(Math.floor(quotient) == 0) {
    result += print(smallNumeral.glyph, Math.floor(n / smallNumeral.decimal))
  }
  else {
    result += print(bigNumeral.glyph, Math.floor(quotient))
    result += print(smallNumeral.glyph, remainder / smallNumeral.decimal)
  }

  return result
}

module.exports = { parse }
