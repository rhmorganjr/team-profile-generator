const Engineer = require('../lib/Engineer');



test('creates an Engineer object', () => {
  const person = new Engineer('John', '133', 'john@gmail.com', 'john');

  expect(person.name).toEqual(expect.any(String));
  expect(person.id).toEqual(expect.any(String));
  expect(person.email).toEqual(expect.any(String));
  expect(person.github).toEqual(expect.any(String));
});