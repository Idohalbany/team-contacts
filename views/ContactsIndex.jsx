import { contactsService } from '../services/contacts.service.local.js'
import { ContactsList } from '../cmps/ContactsList.jsx'
import { ContactsFilter } from '../cmps/ContactsFilter.jsx'
const { useState, useEffect } = React

export function ContactsIndex() {
  const [contacts, setContacts] = useState([])
  const [filterBy, setFilterBy] = useState(null)

  useEffect(() => {
    loadContacts()
  }, [])

  function loadContacts(currentFilter = null, sortBy = null) {
    contactsService.query(currentFilter, sortBy).then((contacts) => {
      setContacts(contacts)
    })
  }

  function handleSetFilter(newFilter) {
    setFilterBy(newFilter)
    loadContacts(newFilter)
  }

  function handleSetSort(sortBy) {
    loadContacts(filterBy, sortBy)
  }

  if (contacts.length === 0) return <div>No Contacts to show...</div>
  return (
    <main className='main-app'>
      <ContactsFilter onSetFilter={handleSetFilter} onSetSort={handleSetSort} />
      <ContactsList contacts={contacts} />
    </main>
  )
}
