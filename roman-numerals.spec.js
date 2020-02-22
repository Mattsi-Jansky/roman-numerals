const parse = require('./roman-numerals')

test('Parses 1 to I', () => {
  const result = parse(1)

  expect(result).toEqual('I')
})

test('parses 2 to II', () => {
  const result = parse(2)

  expect(result).toEqual('II')
})

test('parses 3 to III', () => {
  const result = parse(3)

  expect(result).toEqual('III')
})

test('parses 4 to IV', () => {
  const result = parse(4)

  expect(result).toEqual('IV')
})
