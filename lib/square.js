const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(shapeColor){
        super(shapeColor);
    }

    draw() {
        const svgMarkup = `<rect x="75" y="50" width="150" height="100" fill="${this.shapeColor}" />`;
        return svgMarkup;
    }
}

module.exports = Square;