export function ContactsDetails() {
  if (!Contacts) return <div>Loading...</div>
  return (
    <div className='todo-details'>
      <h2>Contacts Details</h2>
      <h1>First name: ${ }</h1>
      <h1>Last name: ${ }</h1>
      <p>Description: ${ }</p>
      <h2>Phone number: ${ }</h2>
      <h4>Email: ${ }</h4>
    </div>
  )
}
