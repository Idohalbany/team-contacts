import { contactsService } from '../services/contacts.service.local.js'
import { ContactsList } from '../cmps/ContactsList.jsx'
import { ContactsFilter } from '../cmps/ContactsFilter.jsx'

const { useEffect } = React
const { useDispatch, useSelector } = ReactRedux

export function ContactsIndex() {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contactsModule.contacts)
  const filterBy = useSelector((state) => state.contactsModule.filterBy)
  const sortBy = useSelector((state) => state.contactsModule.sortBy)

  useEffect(() => {
    loadContacts(filterBy, sortBy)
  }, [filterBy, sortBy])

  function loadContacts(currentFilter = null, sortBy = null) {
    contactsService.query(currentFilter, sortBy).then((contacts) => {
      dispatch(setContacts(contacts))
    })
  }

  if (!contacts || contacts.length === 0) return <div>No Contacts to show...</div>
  return (
    <main className='main-app'>
      <ContactsFilter />
      <ContactsList contacts={contacts} />
    </main>
  )
}
