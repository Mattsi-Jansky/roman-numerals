module.exports = (i) => {
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

function print(letter, times) {
  let result = ''

  for(let i = 0; i < times; i++) {
    result += letter
  }

  return result
}
