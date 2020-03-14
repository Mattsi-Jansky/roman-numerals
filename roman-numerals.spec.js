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
  [13,'XIII'],
  [14,'XIV'],
  [15,'XV'],
  [16,'XVI'],
  [17,'XVII'],
  [18,'XVIII'],
  [19,'XIX'],
  [20,'XX'],
  [30,'XXX'],
  // [40,'XL'],
  // [50,'L'],
  // [60,'LX'],
  // [70,'LXX'],
  // [80,'LXXX'],
  // [90,'XC'],
  // [100,'C'],
]

testCases.forEach(testCase => {
  const from = testCase[0]
  const to = testCase[1]

  test(`Parses ${from} to ${to}`, () => {
    const result = parse(from)

    expect(result).toEqual(to)
  })
})