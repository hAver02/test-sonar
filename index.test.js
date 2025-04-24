const { greet } = require('./index'); // (you might need to export your function)

test('greet returns correct message', () => {
  expect(greet("Alice")).toBe("Hello Alice");
});
