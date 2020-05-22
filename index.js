const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
      do {
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
        }
      });
      } while (!done);
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

function createInern() {
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
  console.log(team.length);
}

getInput();