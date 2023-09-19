import { contactsService } from '../services/contacts.service.local.js'

export const REMOVE_CONTACT = 'REMOVE_TODO'
export const CONTACT_UNDO = 'CONTACT_UNDO'

const initialState = {
  contacts: [],
  lastContacts: [],
  filterBy: contactsService.getDefaultFilter(),
  user: null,
}

export function ContactsReducer(state = initialState, action) {
  let contacts
  let lastContacts

  switch (action.type) {
    case 'SET_CONTACTS':
      return { ...state, contacts: action.contacts }
    case 'SET_FILTER':
      return { ...state, filterBy: action.filterBy }
    case 'SET_USER':
      return { ...state, user: action.user }

    case 'REMOVE_TODO':
      contacts = state.contacts.filter(contact => contact._id !== action.contact)
      return { ...state, user: action.user, lastContacts }

    case 'CONTACT_UNDO':
      contacts = [...state.lastContacts]
      return { ...state, contacts }

    default:
      return state
  }
}
