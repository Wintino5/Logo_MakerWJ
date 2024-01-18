const inquirer = require('inquirer'); 
const fs = require('fs');
const generateLogo = require('./lib/generateLogo');

const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter three characters"
    },
    {
        type: "input",
        name: "text_color",
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
        type: "input",
        name: "shape_color",
        message: "What color would you like the shape to be?"
    }
]

function writeToFile(fileName, data) {
    const logoContent = generateLogo(data);
    fs.writeFile(fileName, content, function(error) {
        if (error) {
            return console.log(error);
        }

        console.log('Generated logo.svg');
    });
}

function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            var fileName = 'logo.svg';
            writeToFile(fileName, data);
        });
}

init(); 