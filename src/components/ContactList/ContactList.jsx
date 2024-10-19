import Contact from "../Contact/Contact";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";

const ContactList = () => {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <Contact />
    </div>
  );
};

export default ContactList;
