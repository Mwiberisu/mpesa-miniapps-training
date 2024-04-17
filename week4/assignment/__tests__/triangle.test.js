import Triangle from "./../src/triangle.js";

describe("Triangle Tests", () => {
  //group triangle tests in a suite
  test("should correctly create a triangle with 3 lengths", () => {
    const triangle = new Triangle(2, 4, 6);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(6);
  });
});
