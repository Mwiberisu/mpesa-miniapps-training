import Triangle from "./../src/triangle.js";

describe("Triangle Tests", () => {
  //group triangle tests in a suite
  test("should correctly create a triangle with 3 lengths", () => {
    const triangle = new Triangle(2, 4, 6);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(6);
  });
  test("should correctly determine if 3 lengths are not a triangle", () => {
    const notTriangle = new Triangle(2, 7, 3);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });
  test("should correctly determine whether three lengths make a scalene triangle", () => {
    const scalTriangle = new Triangle(4, 5, 7);
    expect(scalTriangle.checkType()).toEqual("scalene triangle");
  });
  test("should correctly determine whether three lengths make an isosceles triangle", () => {
    const isoscTriangle = new Triangle(5, 5, 7);
    expect(isoscTriangle.checkType()).toEqual("isosceles triangle");
  });
  test("should correctly determine whether three lengths make an equilateral triangle", () => {
    const isoscTriangle = new Triangle(5, 5, 5);
    expect(isoscTriangle.checkType()).toEqual("equilateral triangle");
  });
});
