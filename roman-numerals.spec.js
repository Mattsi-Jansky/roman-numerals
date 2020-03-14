const { parse } = require('./roman-numerals')

const testCases = [
  [1,'I'],
  [2,'II'],
  [3,'III'],
  [4,'IV'],
  [5,'V'],
  [6,'VI'],
  [7,'VII'],
  [8,'VIII'],
  [9,'IX'],
  [10,'X'],
  [11,'XI'],
  [12,'XII'],
]

testCases.forEach(testCase => {
  const from = testCase[0]
  const to = testCase[1]

  test(`Parses ${from} to ${to}`, () => {
    const result = parse(from)

    expect(result).toEqual(to)
  })
})