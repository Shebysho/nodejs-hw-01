import { faker } from '@faker-js/faker';
import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

async function generateContacts() {
  const count = parseInt(process.argv[2]) || 5;
  const contacts = await readContacts();
  for (let i = 0; i < count; i++) {
    const newContact = createFakeContact();
    newContact.name = faker.person.fullName();
    contacts.push(newContact);
  }
  await writeContacts(contacts);
}

generateContacts();