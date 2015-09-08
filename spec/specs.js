describe('triangleTracker', function() {
  it("if side c is greater than side A + B then it's not a triangle ", function() {
    expect(triangleTracker(5,5,11)).to.equal("These sides do not make a triangle.");
  });

  it("if side A is greater than side B + C then it's not a triangle", function() {
    expect(triangleTracker(11,5,5)).to.equal("These sides do not make a triangle.");
  });

  it("if side B is greater than side A + C then it's not a triangle", function() {
    expect(triangleTracker(5,11,5)).to.equal("These sides do not make a triangle.");
  });

  it("if sides A, B and C are equal then it's an equilateral", function() {
    expect(triangleTracker(5,5,5)).to.equal("Equilateral");
  });

  it("if sides A and B are equal then it's an isosceles", function() {
    expect(triangleTracker(5,5,6)).to.equal("Isosceles");
  });

  It("If side B and C are equal then it's an isosceles", function() {
    expect(triangleTracker(6,5,5)).to.equal("Isosceles");
  });

  it("if side C and A are equal then it's an isosceles", function() {
    expect(triangleTracker(5,6,5)).to.equal("Isosceles");
  });

  it("no sides are equal then it's a scalene", function() {
    expect(triangleTracker(4,5,6)).to.equal("Scalene");
  });
});
