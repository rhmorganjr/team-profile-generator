const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
  const person = new Manager('Patrick', '165', 'patrick@gmail.com', '(555) 123-4567');

  expect(person.name).toEqual(expect.any(String));
  expect(person.id).toEqual(expect.any(String));
  expect(person.email).toEqual(expect.any(String));
  expect(person.officeNumber).toEqual(expect.any(String));
});