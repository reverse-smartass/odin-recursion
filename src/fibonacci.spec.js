import { fibonacci, fibonacciList } from "./fibonacci";

describe("fibonacci", () => {
  test("4th fibonacci number is 3", () => {
    expect(fibonacci(4)).toBe(3);
  });
  test("6th fibonacci number is 8", () => {
    expect(fibonacci(6)).toBe(8);
  });
  test("10th fibonacci number is 55", () => {
    expect(fibonacci(10)).toBe(55);
  });
  test("15th fibonacci number is 610", () => {
    expect(fibonacci(15)).toBe(610);
  });
  test("18th fibonacci number is 2584", () => {
    expect(fibonacci(18)).toBe(2584);
  });
  test("0th fibonacci number is 0", () => {
    expect(fibonacci(0)).toBe(0);
  });
  test("first 8 fibonacci numbers are [0, 1, 1, 2, 3, 5, 8, 13]", () => {
    expect(fibonacciList(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
  test("first 41 fibonacci numbers test", () => {
    expect(fibonacciList(41)).toStrictEqual([
      0,
      1,
      1,
      2,
      3,
      5,
      8,
      13,
      21,
      34,
      55,
      89,
      144,
      233,
      377,
      610,
      987,
      1597,
      2584,
      4181,
      6765,
      10946,
      17711,
      28657,
      46368,
      75025,
      121393,
      196418,
      317811,
      514229,
      832040,
      1346269,
      2178309,
      3524578,
      5702887,
      9227465,
      14930352,
      24157817,
      39088169,
      63245986,
      102334155
    ]);
  });
  test("doesn't accept negatives", () => {
    expect(fibonacci(-25)).toBe(undefined);
  });
  test("doesn't accept floats", () => {
    expect(fibonacci(5.4)).toBe(undefined);
  });
  test("doesn't accept a number as a string", () => {
    expect(fibonacci("5")).toBe(undefined);
  });
  test("doesn't accept strings", () => {
    expect(fibonacci("foo")).toBe(undefined);
  });
  test("doesn't accept arrays", () => {
    expect(fibonacci([5])).toBe(undefined);
  });
});
