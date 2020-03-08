const { findBestFittingNumeral, parse } = require('./roman-numerals')

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

test.only('should find best fitting numeral X for 9', () => {
  expect(findBestFittingNumeral(9)).toEqual(expect.objectContaining({decimal: 10, glyph: 'X'}))
})

test('should find best fitting numeral V for 8', () => {
  expect(findBestFittingNumeral(8)).toEqual(expect.objectContaining({decimal: 5, glyph: 'V'}))
})

test('should find best fitting numeral V for 7', () => {
  expect(findBestFittingNumeral(7)).toEqual(expect.objectContaining({decimal: 5, glyph: 'V'}))
})

test('should find best fitting numeral V for 6', () => {
  expect(findBestFittingNumeral(6)).toEqual(expect.objectContaining({decimal: 5, glyph: 'V'}))
})

test('should find best fitting numeral V for 5', () => {
  expect(findBestFittingNumeral(5)).toEqual(expect.objectContaining({decimal: 5, glyph: 'V'}))
})

test('should find best fitting numeral V for 4', () => {
  expect(findBestFittingNumeral(4)).toEqual(expect.objectContaining({decimal: 5, glyph: 'V'}))
})

test('should find best fitting numeral I for 3', () => {
  expect(findBestFittingNumeral(3)).toEqual(expect.objectContaining({decimal: 1, glyph: 'I'}))
})

test('should find best fitting numeral I for 2', () => {
  expect(findBestFittingNumeral(2)).toEqual(expect.objectContaining({decimal: 1, glyph: 'I'}))
})

test('should find best fitting numeral I for 1', () => {
  expect(findBestFittingNumeral(1)).toEqual(expect.objectContaining({decimal: 1, glyph: 'I'}))
})