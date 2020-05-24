const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = 'Intern';
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.role;
  }

  static getQuestions() {
    return [
      { name: 'name', message:"Intern's name?"},
      { name: 'id', message: "Intern's id?"},
      { name: 'email', message: "Intern's email address?"},
      { name: 'school', message: "Intern's school?"},
    ];
  }
}

module.exports = Intern;
