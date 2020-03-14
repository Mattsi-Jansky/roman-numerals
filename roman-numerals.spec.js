const { parse } = require('./roman-numerals')

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

test('parses 5 to V', () => {
  const result = parse(5)

  expect(result).toEqual('V')
})

test('parses 6 to VI', () => {
  const result = parse(6)

  expect(result).toEqual('VI')
})

test('parses 7 to VII', () => {
  const result = parse(7)

  expect(result).toEqual('VII')
})

test('parses 8 to VIII', () => {
  const result = parse(7)

  expect(result).toEqual('VII')
})

test('parses 9 to IX', () => {
  const result = parse(7)

  expect(result).toEqual('VII')
})

test('parses 10 to X', () => {
  const result = parse(7)

  expect(result).toEqual('VII')
})

test('parses 11 to XI', () => {
  const result = parse(7)

  expect(result).toEqual('VII')
})

test('parses 12 to XII', () => {
  const result = parse(12)

  expect(result).toEqual('XII')
})
