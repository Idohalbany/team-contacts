const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM
const { useSelector } = ReactRedux

import { contactsService } from "../services/contacts.service.local.js"

export function ContactsDetails() {
  const params = useParams()
  const navigate = useNavigate()

  const [currContact, setCurrContact] = useState(null)

  useEffect(() => {
    const { contactId } = params
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

  if (!currContact) return <div>Loading...</div>
  const { _id, firstName, lastName, phone, mail, desc } = currContact

  return (
    <div className='contact-details'>
      <h2>Contacts Details</h2>
      <br />
      <h1>First name: {firstName} Last name: {lastName}</h1>
      <h4>Email: {mail}</h4>
      <p>Description: {desc}</p>
      <h2>Phone number: {phone}</h2>
      <h4>ID: {_id}</h4>
    </div>
  )
}
