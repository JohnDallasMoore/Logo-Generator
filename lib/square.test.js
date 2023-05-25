const Square = require('./square');

describe('Square', () => {
  test('should draw a square with the correct shape color', () => {
    const shapeColor = 'orange';
    const square = new Square(shapeColor);
    const expectedSVG = `<rect x="75" y="30" width="150" height="150" fill="${shapeColor}" />`;
    
    expect(square.shapeColor).toEqual(shapeColor);
    expect(square.draw()).toEqual(expectedSVG);
  });
});