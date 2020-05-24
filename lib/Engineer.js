const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = 'Engineer';
  }

  getGitHub() {
    return this.github;
  }

  getRole() {
    return this.role;
  }

  static getQuestions() {
    return [
      { name: 'name', message:"Engineer's name?"},
      { name: 'id', message: "Engineer's id?"},
      { name: 'email', message: "Engineer's email address?"},
      { name: 'github', message: "Engineer's GitHub name?"},
    ];
  }
}

module.exports = Engineer;
