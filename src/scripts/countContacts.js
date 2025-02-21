const readContacts = require('../utils/readContacts');

async function countContacts() {
  const contacts = await readContacts();
  console.log(`Кількість контактів: ${contacts.length}`);
}

countContacts();