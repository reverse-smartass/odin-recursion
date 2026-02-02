import { mergesort } from "./mergesort";

describe("mergesort", () => {
  test("mergesort test 1", () => {
    expect(mergesort([5, 2, 7, 1, 3, 4, 45, 90, 12])).toStrictEqual([
      1, 2, 3, 4, 5, 7, 12, 45, 90,
    ]);
  });

  test("mergeSort([73]) → [73]mergeSort([]) → []", () => {
    expect(mergesort([73])).toStrictEqual([73]);
  });

  test("mergeSort([1, 2, 3, 4, 5]) → [1, 2, 3, 4, 5]", () => {
    expect(mergesort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test("mergeSort([3, 2, 1, 13, 8, 5, 0, 1]) → [0, 1, 1, 2, 3, 5, 8, 13]", () => {
    expect(mergesort([3, 2, 1, 13, 8, 5, 0, 1])).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("mergeSort([105, 79, 100, 110]) → [79, 100, 105, 110]", () => {
    expect(mergesort([105, 79, 100, 110])).toStrictEqual([79, 100, 105, 110]);
  });

  test("mergeSort([]) → []", () => {
    expect(mergesort([])).toStrictEqual([]);
  });


});
