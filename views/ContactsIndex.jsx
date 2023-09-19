import { contactsService } from '../services/contacts.service.local.js'
import { ContactsList } from '../cmps/ContactsList.jsx'
const { useState, useEffect } = React

export function ContactsIndex() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    loadContacts()
  }, [])

  function loadContacts() {
    contactsService.query().then((contacts) => {
      setContacts(contacts)
    })
  }
  if (contacts.length === 0) return <div>No Contacts to show...</div>
  return (
    <main className='main-app'>
      <ContactsList contacts={contacts} />
    </main>
  )
}
