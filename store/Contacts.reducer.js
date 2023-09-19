import { contactsService } from '../services/contacts.service.local.js'

export const REMOVE_CONTACT = 'REMOVE_TODO'
export const CONTACT_UNDO = 'CONTACT_UNDO'
export const SET_CONTACTS = 'SET_CONTACTS'
export const SET_FILTER = 'SET_FILTER'
export const SET_SORT = 'SET_SORT'
export const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT'

const initialState = {
  contacts: [],
  lastContacts: [],
  filterBy: contactsService.getDefaultFilter(),
  sortBy: null,
  user: null,
}

export function ContactsReducer(state = initialState, action) {
  let contacts
  let lastContacts

  switch (action.type) {
    case 'SET_CONTACTS':
      // console.log(action.contacts)
      return { ...state, contacts: action.contacts }
    case SET_FILTER:
      return { ...state, filterBy: action.filterBy }
    case SET_SORT:
      return { ...state, sortBy: action.sortBy }
    case 'SET_USER':
      return { ...state, user: action.user }

    case 'REMOVE_TODO':
      lastContacts = [...state.contacts]
      contacts = state.contacts.filter((contact) => contact._id !== action.contactId)
      return { ...state, contacts, lastContacts }

    case 'CONTACT_UNDO':
      contacts = [...state.lastContacts]
      return { ...state, contacts }

    default:
      return state
  }
}
