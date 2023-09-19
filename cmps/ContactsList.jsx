import { ContactsPreview } from './ContactsPreview.jsx'

export function ContactsList({ contacts }) {
  return (
    <ul className='Contacts-list'>
      {contacts.map((contact) => (
        <li key={contact._id}>
          <ContactsPreview contact={contact} />
        </li>
      ))}
    </ul>
  )
}
