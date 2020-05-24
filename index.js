const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const fileName = 'index.html';

const managerQuestions = Manager.getQuestions();
let team = [];

function createManager(answers) {
  let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
  team.push(manager);

  createMembers();
}

function createEngineer() {
  const engineerQuestions = Engineer.getQuestions(); 
  inquirer
  .prompt(engineerQuestions)
  .then(answers => {
    let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    team.push(engineer);
  
    createMembers();
  });
}


function createIntern() {
  const internQuestions = Intern.getQuestions();
  inquirer
  .prompt(internQuestions)
  .then(answers => {
    let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    team.push(intern);
  
    createMembers();
  });
}

function createMembers() {
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
    if (choice.action === 'finish Team') {
      writeOutput();
      isDone = true;
    }
    else if (choice.action === 'Engineer') {
      createEngineer();
    }
    else if (choice.action === 'Intern') {
      createIntern();
    }
  });
}

function getInput() {
  let done = false;
  inquirer
    .prompt(managerQuestions)
    .then(answers => {
      createManager(answers);
  });  
}

function writeOutput() {
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
    <div class='container'>
      <header>
        <h2 class='jumbotron'>Team</h2>
      </header>
      <div class='row'>
  `;

  let bottom = `
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
  </body>
  </html>
  `;
  let member = ``;
  for (let i = 0; i < team.length; i++) {
    if ( team[i].getRole() === 'Manager') {
      let mbr = `<div class='manager col-sm-3 card card-body'>
          <p class='card-title'>${team[i].getName()} - ${team[i].getRole()}</p>
      
          <p>ID: ${team[i].getId()}</p> 
          Email: <a href = "mailto:${team[i].getEmail()}">${team[i].getEmail()}</a> 
          <p>Office Number: ${team[i].getOfficeNumber()}</p> 
        </div>
      `;
      member += mbr;
    }
    else if (team[i].getRole() === 'Engineer') {
      let mbr = `<div class='engineer col-sm-3 card card-body'>
          <p class='card-title'>${team[i].getName()} - ${team[i].getRole()}</p>
      
          <p>ID: ${team[i].getId()}</p> 
          Email: <a href = "mailto:${team[i].getEmail()}">${team[i].getEmail()}</a> 
          GitHub: <a href = "https.github.com/${team[i].getGitHub}">${team[i].getGitHub()}</a> 
        </div>
      `;
      member += mbr;
    }
    else if (team[i].getRole() === 'Intern') {
      let mbr = `<div class='engineer col-sm-3 card card-body'>
          <p class='card-title'>${team[i].getName()} - ${team[i].getRole()}</p>
      
          <p>ID: ${team[i].getId()}</p> 
          Email: <a href = "mailto:${team[i].getEmail()}">${team[i].getEmail()}</a> 
          <p>School: ${team[i].getSchool()}</p> 
        </div>
      `;
      member += mbr;
    }
  }
  fs.writeFile(fileName, prefix + member + bottom, err => {
    if (err) throw err;
    console.log('Done');
  });
  
}

getInput();