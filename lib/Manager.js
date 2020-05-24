const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = 'Manager';

  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this.role;
  }

  static getQuestions() {
    return [
      { name: 'name', message:"Manager's name?"},
      { name: 'id', message: "Manager's id?"},
      { name: 'email', message: "Manager's email address?"},
      { name: 'officeNumber', message: "Manager's office number?"},
    ];
  }
}
module.exports = Manager;
