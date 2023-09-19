const { useState, useEffect } = React

const { useParams, useNavigate, Link } = ReactRouterDOM
const { useSelector } = ReactRedux

import { contactsService } from "../services/contacts.service.local.js"
import { removeContact } from "../store/Contacts.actions.js"

export function ContactsDetails() {
  const params = useParams()
  const navigate = useNavigate()

  const [currContact, setCurrContact] = useState(null)
  const { contactId } = params

  useEffect(() => {
    contactsService.getById(contactId)
      .then(contact => {
        console.log('contact:', contact)
        if (!contact) return navigate('/contacts')
        setCurrContact(contact)
      })
      .catch(err => {
        console.log('Had issues loading contact', err);
      })
  }, [])

  function onRemove() {
    removeContact(contactId)
      .then(() => {
        // showSuccessMsg('Contact removed')
        navigate('/contacts')
      })
      .catch(err => {
        navigate('/contacts')
        console.log('Cannot remove Contact', err)
        // showErrorMsg('Cannot remove Contact')
      })
  }

  if (!currContact) return <div>Loading...</div>
  const { _id, firstName, lastName, phone, mail, desc } = currContact

  return (
    <div className='contact-details'>
      <h2>Contacts Details</h2>
      <br />
      <h1>{firstName} {lastName}</h1>
      <h4>{mail}</h4>
      <p>{desc}</p>
      <h2>{phone}</h2>
      <h4>{_id}</h4>

      <Link to={"/contacts/edit/" + contactId}><button>Edit</button></Link>
      <button onClick={onRemove}>Remove</button>
    </div>
  )
}
