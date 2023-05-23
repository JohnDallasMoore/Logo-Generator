const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');


function generateLogo(answers){
    const { text, textColor, shape, shapeColor } = answers;

    let shapeTemplate;
    
    switch (shape){
        case 'circle':
            const circle = new Circle(shapeColor);
            shapeTemplate = circle.draw();
            break;
        case 'triangle':
            const triangle = new Triangle(shapeColor);
            shapeTemplate = triangle.draw();
            break;
        case 'square':
            const square = new Square(shapeColor);
            shapeTemplate = square.draw();
            break;
        default:
            shapeTemplate = '';
    };
                    
    return `
<svg width="300" height="200" xmlns="https://www.w3.org/2000/svg" version="1.1">

    ${shapeTemplate}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>
`;
}
                
                
module.exports = generateLogo;