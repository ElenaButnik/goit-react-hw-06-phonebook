import { createReducer } from "@reduxjs/toolkit";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

// const contactList = (state = initialState, action) => {
//   switch (action.type) {
//     case "contact/add":
//       return [...state, action.payload];

//       case "contact/delete":
//       return state.filter(contact => contact.id !== action.payload.id);

//     default:
//       return state;
//   }
// };

export const contactList = createReducer(initialState, {
  "contact/add": (state, { payload }) => [...state, payload],
  "contact/delete": (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

export const contactFilter = createReducer('', {
  'filter/value': (_, { payload})=> payload,
})

// const contactFilter = (state = "", action) => {
//   return state;
// };

