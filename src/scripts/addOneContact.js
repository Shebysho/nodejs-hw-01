const readContacts = require('../utils/readContacts');
const writeContacts = require('../utils/writeContacts');
const createFakeContact = require('../utils/createFakeContact');

async function addOneContact() {
  const contacts = await readContacts();
  contacts.push(createFakeContact());
  await writeContacts(contacts);
}

addOneContact();