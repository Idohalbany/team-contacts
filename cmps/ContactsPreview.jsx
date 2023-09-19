const { Link } = ReactRouterDOM

export function ContactsPreview({ contact }) {
  console.log(contact)
  return (
    <div className='contacts-item'>
      <div className='contact-name'>
        <strong>Name: </strong>
        {contact.firstName} {contact.lastName}
      </div>
      <div className='contact-email'>
        <strong>Email: </strong>
        {contact.mail}
      </div>
      <div className='contact-phone'>
        <strong>Phone: </strong>
        {contact.phone}
      </div>
      <div className='contact-desc'>
        <strong>Description: </strong>
        {contact.desc}
      </div>
      <Link to={`/contacts/${contact._id}`}>
        <button className='details-btn'>Details</button>
      </Link>
    </div>
  )
}
