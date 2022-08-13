const sum = require("./sum_arguments");

describe("testing the sum arguments", () => {
  test("sum of two positive numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("sum of one positive and negative number", () => {
    expect(sum(-20, 3)).toBe(-17);
  });

  test("sum of two decimal numbers", () => {
    expect(sum(2.5, 3.9)).toBe(6.4);
  });


  test("sum of two negative numbers", () => {
    expect(sum(-9, -3)).toBe(-12);
  });
});
