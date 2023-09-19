const { useState } = React

export function ContactsFilter({ onSetFilter, onSetSort }) {
  const [filterBy, setFilterBy] = useState({
    txt: '',
    mail: '',
    phone: '',
  })

  function handleSortChange(event) {
    onSetSort(event.target.value)
  }

  function handleChange(event) {
    const { name, value } = event.target
    setFilterBy((prevFilter) => ({ ...prevFilter, [name]: value }))
    onSetFilter({ ...filterBy, [name]: value })
  }

  return (
    <div className='filter-container'>
      <input
        type='text'
        name='txt'
        value={filterBy.txt}
        placeholder='Search by name'
        onChange={handleChange}
      />
      <input
        type='text'
        name='mail'
        value={filterBy.mail}
        placeholder='Search by email'
        onChange={handleChange}
      />
      <input
        type='text'
        name='phone'
        value={filterBy.phone}
        placeholder='Search by phone'
        onChange={handleChange}
      />
      <select onChange={handleSortChange}>
        <option value='nameAsc'>Name (A-Z)</option>
        <option value='nameDesc'>Name (Z-A)</option>
        <option value='emailAsc'>Email (A-Z)</option>
        <option value='emailDesc'>Email (Z-A)</option>
      </select>
    </div>
  )
}
