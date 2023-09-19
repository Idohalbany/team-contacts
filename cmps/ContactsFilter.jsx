const { useDispatch, useSelector } = ReactRedux
import { setFilter, setSort } from '../store/Contacts.actions.js'
const { Link } = ReactRouterDOM

export function ContactsFilter() {
  const dispatch = useDispatch()
  const filterBy = useSelector((state) => state.contactsModule.filterBy)

  function handleSortChange(event) {
    dispatch(setSort(event.target.value))
  }

  function handleChange(event) {
    const { name, value } = event.target
    const updatedFilter = { ...filterBy, [name]: value }
    dispatch(setFilter(updatedFilter))
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
      <Link to={`/contacts/add`}>
        <button className='add-btn'>Add</button>
      </Link>
    </div>
  )
}
