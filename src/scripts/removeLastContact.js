const readContacts = require('../utils/readContacts');
const writeContacts = require('../utils/writeContacts');

async function removeLastContact() {
  const contacts = await readContacts();
  if (contacts.length > 0) {
    contacts.pop();
    await writeContacts(contacts);
  } else {
    console.log('Немає контактів для видалення.');
  }
}

removeLastContact();