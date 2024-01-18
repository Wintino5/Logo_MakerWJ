const inquirer = require('inquirer'); 
const fs = require('fs');
const { Square, Circle } = require('./lib/shapes')
// const generateLogo = require('./lib/generatelogo');
// const Shape = require('./lib/Shape');
async function questions() {
    const { text, textColor, shape, shapeColor } = await inquirer.prompt ([
        {
            name: "text",
            message: "Please enter three characters"
        },
        {
            name: "textColor",
            message: "Please enter a color or hex number"
        },
        {
            type: "list",
            name: "shape",
            message: "What shape would you like?",
            choices: [
                "Circle",
                "Triangle",
                "Square"        
            ]
        },
        {
            name: "shapeColor",
            message: "What color would you like the shape to be?"
        }
    ]);
    
    let userShape;
    
    switch(shape) {
        case 'Circle':
            userShape = new Circle(text, textColor, 50, 75);
            break;
        case 'Square':
            userShape = new Square(text, textColor, 75, 90);
            break;
        default:
            userShape = new Triangle(text, textColor);
    }
    
    userShape.setColor(shapeColor);
    
    return userShape;
}


async function generateSVG(userShape) {
    const svgCode = `<svg version="1.1" width="300" height="200">
        ${userShape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userShape.textColor}">${userShape.text}</text>
    </svg>`

    await fs.promises.writeFile('./logo.svg', svgCode);

    console.log('Generated logo.svg');
}

questions()
    .then(generateSVG);


// function writeToFile(fileName, data) {
//     const logoContent = generateLogo(data);
//     fs.writeFile(fileName, content, function(error) {
//         if (error) {
//             return console.log(error);
//         }

        
//     });
// }

// function init() {
//     inquirer.prompt(questions)
//         .then(function (data) {
//             var fileName = 'logo.svg';
//             writeToFile(fileName, data);
//         });
// }

// init(); 