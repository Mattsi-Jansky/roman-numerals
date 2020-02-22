module.exports = (i) => {
  let result = ''

  const fives = i / 5

  if(i > Math.ceil(5 / 2)) {
    result += print('I', 5 - i)

    result += print('V', fives)
  }
  else {
    result += print('I', i)
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
