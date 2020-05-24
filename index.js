const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const fileName = 'index.html';
//const HtmlFileCreation = require('./src/htmlFileCreation');

const managerQuestions = [
  { name: 'name', message:"Manager's name?"},
  { name: 'id', message: "Manager's id?"},
  { name: 'email', message: "Manager's email address?"},
  { name: 'officeNumber', message: "Manager's office number?"},
]

let team = [];

function createManager(answers) {
  let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
  team.push(manager);

  console.log(manager.getOutput());
}

function getInput() {
  let done = false;
  inquirer
    .prompt(managerQuestions)
    .then(answers => {
      createManager(answers);
      
        inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Add another employee or finish?',
          choices: ['Engineer', 'Intern', 'finish Team'],
        }
      ])
      .then(choice => {
        console.log(choice);
        if (choice.action === 'finish Team') {
          done = true;
          writeOutput();
        }
        else if (choice.action === 'Engineer') {
          console.log('create Engineer');
          createEngineer();
        }
        else if (choice.action === 'Intern') {
          console.log('create Intern');
          createIntern();
        }
      });
        
  });
}

function createEngineer() {
  const engineerQuestions = [
    { name: 'name', message:"Engineer's name?"},
    { name: 'id', message: "Engineer's id?"},
    { name: 'email', message: "Engineer's email address?"},
    { name: 'github', message: "Engineer's GitHub name?"},
  ]

  inquirer
  .prompt(engineerQuestions)
  .then(answers => {
    let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    team.push(engineer);
  
    console.log(engineer.getOutput());
  });
}

function createIntern() {
  const internQuestions = [
    { name: 'name', message:"Intern's name?"},
    { name: 'id', message: "Intern's id?"},
    { name: 'email', message: "Intern's email address?"},
    { name: 'school', message: "Intern's school?"},
  ]

  inquirer
  .prompt(internQuestions)
  .then(answers => {
    let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    team.push(intern);
  
    console.log(intern.getOutput());
  });
}

function writeOutput() {

  console.log("writeOutput");
  let prefix = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"
  />
  <link 
    rel="stylesheet" 
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
    crossorigin="anonymous"
  />
    <link rel="stylesheet" href="./lib/css/style.css">
    <title>TEAM</title>
  </head>
  <body>
      <header>
        <h2 class='jumbotron'>Team</h2>
      </header>
  `;
  let main = `
    <main class="main container">
      <div class="row" id="team">

      </div>    
    </main>
  `;
  let bottom = `
    <footer>
      Dilbert &copy 2020, Andrews McMeel Syndication; 
    </footer>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>

  </body>
  </html>
  `;
  
  //console.log("team = "+team);
  let manager = team[0];
  console.log(manager);
  let mgr = `<div class='manager col-sm-2 card card-body'>
      <img class='card-title' src='./lib/img/boss.jpg' />
      <p class='card-title'>${manager.getName()} - ${manager.getRole()}</p>
  
      <p>ID: ${manager.getId()}</p> 
      <p>Email: ${manager.getEmail()}</p> 
      <p>Office Number: ${manager.getOfficeNumber()}</p> 
    </div>
  `;


  fs.writeFile(fileName, prefix + mgr + bottom, err => {
    if (err) throw err;
    console.log('Done');
  });
  
}

getInput();