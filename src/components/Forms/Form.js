import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "../Forms/Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/actions";
import { getContacts } from "../../redux/contacts/selectors";
export default function Form() {
  const [userName, setName] = useState("");
  const [userNumber, setNumber] = useState("");
  const prodIdName = uuidv4();
  const prodIdNumber = uuidv4();
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem("contacts")) ?? [];
  // });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "userName":
        setName(value);
        break;

      case "userNumber":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (contacts.find((contact) => contact.name === userName)) {
      alert(`${userName} is already in contacts`);
      reset();
      return;
    }
    const newContacts = {
      name: userName,
      number: userNumber,
      id: uuidv4(),
    };

    dispatch(addContact(newContacts));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label} htmlFor={prodIdName}>
          Name
        </label>
        <input
          className={s.input}
          id={prodIdName}
          type="text"
          name="userName"
          value={userName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
        />

        <label className={s.label} htmlFor={prodIdNumber}>
          Number
        </label>
        <input
          className={s.input}
          id={prodIdNumber}
          type="tel"
          name="userNumber"
          value={userNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
        />

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
