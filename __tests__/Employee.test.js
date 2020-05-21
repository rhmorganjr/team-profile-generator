const Employee = require('../lib/Employee');



test('creates an Employee object', () => {
  const person = new Employee('George', '123', 'george@gmail.com');

  expect(person.name).toEqual(expect.any(String));
  expect(person.id).toEqual(expect.any(String));
  expect(person.email).toEqual(expect.any(String));
});