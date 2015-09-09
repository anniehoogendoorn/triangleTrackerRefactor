describe('isTriangle', function() {
  it("if side C is greater than side A + B then it's not a triangle ", function() {
    expect(isTriangle(5,5,11)).to.equal(false);
  });

  it("if side A is greater than side B + C then it's not a triangle", function() {
    expect(isTriangle(11,5,5)).to.equal(false);
  });

  it("if side B is greater than side A + C then it's not a triangle", function() {
    expect(isTriangle(5,11,5)).to.equal(false);
  });

  it("if all sides are equal then it's a triangle", function() {
    expect(isTriangle(5,5,5)).to.equal(true);
  });

});

describe('triangleType', function() {
  it("if sides A, B and C are equal then it's an equilateral", function() {
    expect(triangleType(5,5,5)).to.equal("Equilateral");
  });

  it("if sides A and B are equal then it's an isosceles", function() {
    expect(triangleType(5,5,6)).to.equal("Isosceles");
  });

  it("If side B and C are equal then it's an isosceles", function() {
    expect(triangleType(6,5,5)).to.equal("Isosceles");
  });

  it("if side C and A are equal then it's an isosceles", function() {
    expect(triangleType(5,6,5)).to.equal("Isosceles");
  });

  it("no sides are equal then it's a scalene", function() {
    expect(triangleType(4,5,6)).to.equal("Scalene");
  });


});

describe('triangleTracker', function() {
  it("no sides are equal then it's a scalene", function() {
    expect(triangleTracker(4,5,6)).to.equal("Scalene");
  });

  it("if side C is greater than side A + B then it's not a triangle ", function() {
    expect(isTriangle(5,5,11)).to.equal(false);
  });

});
