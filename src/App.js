import "./App.css";
import Form from "./components/Forms/Form";
import ContactList from "./components/Contacts/ContactList";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
