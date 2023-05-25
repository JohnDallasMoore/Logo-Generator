const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');


function generateLogo(answers){
    const { text, textColor, shape, shapeColor } = answers;

    let shapeTemplate;
    
    switch (shape){
        case 'circle':
            shapeTemplate = new Circle(shapeColor).render()
            break;
        case 'triangle':
            shapeTemplate = new Triangle(shapeColor).render()
            break;
        case 'square':
            shapeTemplate = new Square(shapeColor).render()
            break;
        default:
            shapeTemplate = '';
    };
                    
    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">

    ${shapeTemplate}

    <text x="150" y="${computedStyles(shape)}" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>
`;
}

const computedStyles = (shape) => shape === 'triangle' ? '165' : '125';
                
module.exports = generateLogo;