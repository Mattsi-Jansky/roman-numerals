module.exports = (i) => {
  let result = ''

  //Get mod 5 result
  //If 0, then just print V n times
  //Otherwise, check whether it's less or greater than 2.5.

  const remainder = i % 5 //1
  const fives = i / 5 //0.6

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
    console.log(`wut: ${fives}, ${remainder}`)
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
