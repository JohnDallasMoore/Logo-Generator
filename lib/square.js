const Shape = require('./shapes');

class Square extends Shape {
    constructor(shapeColor){
        super(shapeColor);
    }

    draw() {
        const svgMarkup = `<rect x="75" y="30" width="150" height="150" fill="${this.shapeColor}" />`;
        return svgMarkup;
    }
}

module.exports = Square;