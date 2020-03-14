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
  return parseDigits([...n.toString()])
}

function parseDigits(digits, result = '', power = 1) {
  if(digits.length == 0) return result
  const nextPower = power * 10
  
  const digit = digits.pop()
  result = parseDigit(parseInt(digit) * power, power, nextPower) + result
  return parseDigits(digits, result, nextPower)
}

function parseDigit(n, power, nextPower) {
  const smallNumeral = numerals[power][0]
  const bigNumeral = numerals[power][1]
  const parentNumeral = numerals[nextPower] ? numerals[nextPower][0] : {}
  result = ''

  if(n + smallNumeral.decimal == parentNumeral.decimal) {
    result += print(smallNumeral.glyph, 1) + print(parentNumeral.glyph, 1)
  }
  else if(bigNumeral && n + smallNumeral.decimal == bigNumeral.decimal) {
    result = print(smallNumeral.glyph, 1) + print(bigNumeral.glyph, 1)
  }
  else if(bigNumeral == undefined || n < bigNumeral.decimal) {
    result += print(smallNumeral.glyph, n / smallNumeral.decimal)
  }
  else if(n >= bigNumeral.decimal) {
    const remainder = (n - bigNumeral.decimal)
    result += print(bigNumeral.glyph, 1)
    result += print(smallNumeral.glyph, remainder / smallNumeral.decimal)
  }

  return result
}

function print(letter, times) {
  return Array.from(new Array(times)).reduce(acc => acc + letter,'')
}

module.exports = { parse }
