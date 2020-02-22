const parse = require('./roman-numerals')

test('Parses 1 to I', () => {
  const result = parse(1)

  expect(result).toEqual('I')
})

test('parses 2 to II', () => {
  const result = parse(2)

  expect(result).toEqual('II')
})

