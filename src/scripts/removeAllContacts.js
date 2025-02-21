const writeContacts = require('../utils/writeContacts');

async function removeAllContacts() {
  await writeContacts([]);
}

removeAllContacts();