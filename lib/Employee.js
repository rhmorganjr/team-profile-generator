class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole()  {
    return this.role;
  }

  getOutput() {
    return "name:  " + this.name +
         "\nid:    " + this.id +
         "\nemail: " + this.email;
  }
}

  module.exports = Employee;
