const Engineer = require('../lib/Engineer');



test('creates an Engineer object', () => {
  const person = new Engineer('George', '123', 'george@gmail.com');

  expect(person.name).toEqual(expect.any(String));
  expect(person.id).toEqual(expect.any(String));
  expect(person.email).toEqual(expect.any(String));
});