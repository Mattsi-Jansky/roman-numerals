module.exports = (i) => {
  let result = ''

  const fives = i / 5

  if(i > Math.ceil(5 / 2)) {
    for(let ii = 0; ii < 5 - i; ii++) {
      result += 'I'
    }

    for(let ii = 0; ii < fives; ii++) {
      result += 'V'
    }
  }
  else {
    for(let ii = 0; ii < i; ii++) {
      result += 'I'
    }
  }

  

  return result
}
