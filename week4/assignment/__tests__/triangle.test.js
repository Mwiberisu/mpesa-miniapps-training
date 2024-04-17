import Triangle from "./../src/triangle.js";

describe("Triangle Tests", () => {
  //group triangle tests in a suite
  let reusableTriangle;
  beforeEach(() => {
    reusableTriangle = new Triangle(5, 5, 5);
  });
  test("should correctly create a triangle with 3 lengths", () => {
    expect(reusableTriangle.side1).toEqual(5);
    expect(reusableTriangle.side2).toEqual(5);
    expect(reusableTriangle.side3).toEqual(5);
  });
  test("should correctly determine if 3 lengths are not a triangle", () => {
    reusableTriangle.side1 = 20;
    expect(reusableTriangle.checkType()).toEqual("not a triangle");
  });
  test("should correctly determine whether three lengths make a scalene triangle", () => {
    reusableTriangle.side2 = 6;
    reusableTriangle.side3 = 7;
    expect(reusableTriangle.checkType()).toEqual("scalene triangle");
  });
  test("should correctly determine whether three lengths make an isosceles triangle", () => {
    reusableTriangle.side1 = 7;
    expect(reusableTriangle.checkType()).toEqual("isosceles triangle");
  });
  test("should correctly determine whether three lengths make an equilateral triangle", () => {
    expect(reusableTriangle.checkType()).toEqual("equilateral triangle");
  });
});
