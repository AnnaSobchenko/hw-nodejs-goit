const path = require("path");
const fs = require("fs");
const { nanoid } = require("nanoid");
const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) throw err;
    console.table(JSON.parse(data));
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) throw err;
    const contactById = JSON.parse(data).find(
      (el) => el.id === String(contactId)
    );
    console.log("contactById", contactById);
    return contactById;
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) throw err;
    const contacts = JSON.parse(data).filter(
      (el) => el.id !== String(contactId)
    );
    fs.writeFile(contactsPath, JSON.stringify(contacts), (err) => {
      if (err) throw err;
    });
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) throw err;
    let contacts = JSON.parse(data);
    contacts.push({
      id: nanoid(),
      name: name,
      email: email,
      phone: phone,
    });
    fs.writeFile(contactsPath, JSON.stringify(contacts), (err) => {
      if (err) throw err;
    });
  });
}

module.exports = { getContactById, listContacts, addContact, removeContact };
