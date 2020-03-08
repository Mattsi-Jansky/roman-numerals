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

function doTheThing(input) {
  let remainder = input
  let result = ''

  while(remainder != 0) {
    const numeral = findBestFittingNumeral(remainder)

  }
}

//X has quotient 0.8 for 8, but should be V
//V has quotient 0.8 for 4, and should be V
function findBestFittingNumeral(input) {
  let bestFit = { numeral: undefined, remainder: Infinity, quotient: Infinity }

  numerals.forEach(numeral => {
    const quotient = input / numeral.decimal
    const remainder = input % numeral.decimal
    console.log(`${numeral.glyph}: quotient ${quotient} remainder ${remainder}`)

    if( quotient < 1) {
      if(quotient >= 0.8 && remainder == 2) bestFit = { numeral, remainder, quotient }
    }
    else {
      if(quotient >= 0.8) bestFit = { numeral, remainder, quotient }
    }
  })

  return bestFit.numeral
}

function wat(numeral, subnumeral, acc ) {
  const remainder = acc.remainder % numeral.decimal
  const count = acc.remainder / numeral.decimal
  
  if(acc.remainder >= numeral.decimal && remainder <= 3) {
    acc.result = print(numeral.glyph, count) + print(subnumeral.glyph, remainder) + acc.result
  }
  else if(acc.remainder < numeral.decimal && remainder == 1) {
    acc.result = subnumeral.glyph + print(numeral.glyph, count) + acc.result
  }

  return acc
}

function thing(bigNumber, letter, input) {
  let result = ''

  const remainder = input % bigNumber
  const bigNumbers = input / bigNumber

  if(Math.floor(bigNumbers) == 0) {
    if(remainder <= Math.ceil(bigNumber / 2)) {
      result += print('I', input)
    }
    else {
      result += print('I', bigNumber - remainder)
      result += print(letter, 1)
    }
  }
  else {
    result += print('V', Math.floor(bigNumbers))
    result += print(letter, remainder)
  }

  return result
}
