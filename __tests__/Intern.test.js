const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
  const person = new Intern('Mary', '210', 'mary@gmail.com', 'HardKnocks');

  expect(person.name).toEqual(expect.any(String));
  expect(person.id).toEqual(expect.any(String));
  expect(person.email).toEqual(expect.any(String));
  expect(person.school).toEqual(expect.any(String));
});