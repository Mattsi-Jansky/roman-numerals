const parse = require('./roman-numerals')

test('wat', () => {
  const result = parse(1)

  expect(result).toEqual('I')
})