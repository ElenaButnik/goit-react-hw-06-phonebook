import s from "../Contacts/ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/actions";
import { getContacts, getFilter } from "../../redux/contacts/selectors";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilterContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul className={s.list}>
      {getFilterContacts().map(({ id, name, number }) => (
        <li className={s.list__item} key={id}>
          {name} : {number}
          <button
            className={s.button}
            onClick={() => dispatch(deleteContact(id))}
            type="button"
            id={id}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
