const { useState } = React
const { useNavigate } = ReactRouterDOM
const { useDispatch } = ReactRedux
import { setContacts } from '../store/Contacts.actions.js'
import { contactsService } from '../services/contacts.service.local.js'

export function ContactsAdd() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [contact, setContact] = useState(contactsService.getEmptyContacts())

  function handleChange(event) {
    const { name, value } = event.target
    setContact({ ...contact, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    contactsService.save(contact).then((savedContact) => {
      // Update the global state with the new contact
      contactsService.query().then((contacts) => {
        dispatch(setContacts(contacts))
      })

      setContact(contactsService.getEmptyContacts())
      navigate('/contacts')
    })
  }

  return (
    <div className='contact-add'>
      <h3>Add New Contact</h3>
      <form onSubmit={handleSubmit}>
        <input
          name='firstName'
          value={contact.firstName}
          onChange={handleChange}
          placeholder='First Name'
        />
        <input
          name='lastName'
          value={contact.lastName}
          onChange={handleChange}
          placeholder='Last Name'
        />
        <input name='mail' value={contact.mail} onChange={handleChange} placeholder='Email' />
        <input name='phone' value={contact.phone} onChange={handleChange} placeholder='Phone' />
        <input name='desc' value={contact.desc} onChange={handleChange} placeholder='Description' />
        <button type='submit'>Add Contact</button>
      </form>
    </div>
  )
}
