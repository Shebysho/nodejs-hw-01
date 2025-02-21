const { faker } = require('@faker-js/faker');
const readContacts = require('../utils/readContacts');
const writeContacts = require('../utils/writeContacts');
const createFakeContact = require('../utils/createFakeContact');

async function generateContacts() {
  const count = parseInt(process.argv[2]) || 1;
  const contacts = await readContacts();
  for (let i = 0; i < count; i++) {
    contacts.push(createFakeContact());
  }
  await writeContacts(contacts);
}

generateContacts();