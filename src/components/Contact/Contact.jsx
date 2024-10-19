import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";
import s from "./Contact.module.css";

const Contact = () => {
  const contacts = useSelector(selectContacts);
  const searchContact = useSelector(selectFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().startsWith(searchContact.trim().toLowerCase())
  );

  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {filteredContacts.map((item) => (
        <li className={s.item} key={item.id}>
          <h3 className={s.header}>
            <FaUser className={s.myIcon} />
            {item.name}
          </h3>
          <p className={s.text}>
            <FaPhoneAlt className={s.myIcon} />
            {item.phone}
          </p>
          <button
            className={s.btn}
            onClick={() => dispatch(deleteContact(item.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contact;
