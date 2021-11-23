// import {  createStore } from "redux";

// import { composeWithDevTools } from "redux-devtools-extension";

// export const store = createStore(contactReducer, composeWithDevTools());

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactList, contactFilter } from "./contacts/reducers";
import logger from "redux-logger";

const persistConfig = {
  key: "contacts",
  version: 1,
  storage,
  blacklist: ["filter"],
};

const contactReducer = combineReducers({
  contacts: contactList,
  filter: contactFilter,
});

const persistedContactsReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: persistedContactsReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
