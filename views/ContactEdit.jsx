import { contactsService } from "../services/contacts.service.local.js"

const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouterDOM

export function ContactEdit() {

  const [contactToEdit, setContactToEdit] = useState(contactsService.getEmptyContacts())
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    if (params.contactId) loadContact()
  }, [])

  function loadContact() {
    contactsService.getById(params.contactId)
      .then(setContactToEdit)
      .catch(err => showErrorMsg('Cannot load contact', err))
  }

  function handleChange({ target }) {
    const field = target.name
    let value = target.value

    switch (target.type) {
      case 'number':
      case 'range':
        value = +value || ''
        break;

      case 'checkbox':
        value = target.checked
        break

      default:
        break;
    }

    setContactToEdit(prevContactToEdit => ({ ...prevContactToEdit, [field]: value }))
  }

  function onSaveContact(ev) {
    ev.preventDefault()
    contactsService.save(contactToEdit)
      .then(() => navigate('/contact'))
      .catch(err => showErrorMsg('Cannot save contact', err))
  }

  const { firstName, lastName, mail, desc, phone } = contactToEdit

  return (
    <section className="contact-edit">
      <form onSubmit={ev => onSaveContact(ev)} >
        <label htmlFor="firstName">First name:</label>
        <input onChange={ev => handleChange(ev)} value={firstName} type="text" name="firstName" id="firstName" />

        <label htmlFor="lastName">Last name:</label>
        <input onChange={ev => handleChange(ev)} value={lastName} type="text" name="lastName" id="lastName" />

        <label htmlFor="mail">Email:</label>
        <input onChange={ev => handleChange(ev)} value={mail} type="email" name="mail" id="mail" />

        <label htmlFor="desc">Name:</label>
        <input onChange={ev => handleChange(ev)} value={desc} type="text" name="desc" id="desc" />

        <label htmlFor="phone">Phone number:</label>
        <input onChange={ev => handleChange(ev)} value={phone} type="tel" name="phone" id="phone" />

        <button>Save</button>
      </form>
    </section>
  )
}