module.exports = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: (answer) => {
            if (answer.length <= 3 && answer.length > 0){
                return true;
            } else {
                return 'Please use three or less characters.';
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal):'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal):'
    }
]