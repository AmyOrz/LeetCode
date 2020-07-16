describe("finish leet code", () => {
  const numIdenticalPairs = (nums: number[]) => {
    let result: number = 0;

    nums.forEach((item, i) => {
      nums.slice(i + 1).forEach((itemChild) => {
        if (itemChild == item) {
          result++;
        }
      });
    });

    return result;
  };
  it("1512", () => {
    expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toBe(4);
    expect(numIdenticalPairs([1, 1, 1, 1])).toBe(6);
    expect(numIdenticalPairs([1, 2, 3])).toBe(0);
  });
});
