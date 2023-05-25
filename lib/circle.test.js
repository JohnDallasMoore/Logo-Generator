const Circle = require('./circle');

describe('Circle', () => {
  test('should draw a circle with the correct shape color', () => {
    const shapeColor = 'green';
    const circle = new Circle(shapeColor);
    const expectedSVG = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
    
    expect(circle.shapeColor).toEqual(shapeColor);
    expect(circle.render()).toEqual(expectedSVG);
  });
});