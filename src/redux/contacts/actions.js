//import { v4 as uuidv4 } from 'uuid';

export const addContact = contact => ({
  type: "contact/add",
  payload: contact,
  // payload: {id: uuidv4(),
  //    userName, 
  //    userNumber },
});

export const deleteContact = (id) => ({
  type: "contact/delete",
  payload: { id },
});
