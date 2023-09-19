import { ContactsPreview } from './ContactsPreview.jsx'
import { ContactsAdd } from './ContactsAdd.jsx'
const { useState } = React

export function ContactsList({ contacts }) {
  const [contactsList, setContactsList] = useState(contacts)

  const handleAddContact = (newContact) => {
    setContactsList((prevContacts) => [...prevContacts, newContact])
  }

  return (
    <ul className='Contacts-list'>
      {contactsList.map((contact) => (
        <li key={contact._id}>
          <ContactsPreview contact={contact} />
        </li>
      ))}
      <ContactsAdd onAddContact={handleAddContact} />
    </ul>
  )
}
