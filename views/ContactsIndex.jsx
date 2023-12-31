import { contactsService } from '../services/contacts.service.local.js'
import { ContactsList } from '../cmps/ContactsList.jsx'
import { ContactsFilter } from '../cmps/ContactsFilter.jsx'
import { setContacts } from '../store/Contacts.actions.js'

const { useEffect } = React
const { useDispatch, useSelector } = ReactRedux

export function ContactsIndex() {
  const dispatch = useDispatch()
  const { contacts, filterBy, sortBy } = useSelector((state) => state.contactsModule)

  useEffect(() => {
    loadContacts(filterBy, sortBy)
  }, [filterBy, sortBy])

  function loadContacts(currentFilter = null, sortBy = null) {
    contactsService.query(currentFilter, sortBy).then((contacts) => {
      dispatch(setContacts(contacts))
    })
  }

  return (
    <main className='main-app'>
      <ContactsFilter />
      {!contacts || contacts.length === 0 ? (
        <div>No Contacts to show...</div>
      ) : (
        <ContactsList contacts={contacts} />
      )}
    </main>
  )
}
