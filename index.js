const {getContactById, listContacts, addContact, removeContact} =require('./contacts')

// listContacts();
// getContactById(2);
// addContact("nsns",'msmsm@measureMemory',"4644564");
// removeContact("QztdeWZd6onnzI_zl8zH4");

// console.log('listContacts()', listContacts());


// console.log('getContactById(2);', getContactById(2))

const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      break;

    case "get":
        getContactById(id);
      break;

    case "add":
        addContact(name, email, phone);
      break;

    case "remove":
        removeContact(id)
      break;

    default:

      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);