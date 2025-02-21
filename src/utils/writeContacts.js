import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

async function writeContacts(contacts) {
  try {
    const data = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Контакти успішно збережено.');
  } catch (error) {
    console.error('Помилка запису файлу:', error);
  }
}

export default writeContacts;