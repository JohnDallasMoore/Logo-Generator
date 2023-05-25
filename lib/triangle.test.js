const Triangle = require('./triangle');

describe('Triangle', () => {
  test('should draw a triangle with the correct shape color', () => {
    const shapeColor = 'blue';
    const triangle = new Triangle(shapeColor);
    const expectedSVG = `<polygon points="150,18 244,182 56,182" fill="${shapeColor}" />`;
    
    expect(triangle.shapeColor).toEqual(shapeColor);
    expect(triangle.draw()).toEqual(expectedSVG);
  });
});
