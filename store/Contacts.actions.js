import { contactsService } from '../services/contacts.service.local.js'
import {
  CONTACT_UNDO,
  REMOVE_CONTACT,
  SET_CONTACTS,
  SET_FILTER,
  SET_SORT,
} from './Contacts.reducer.js'
import { store } from './store.js'

export function setContacts(contacts) {
  return {
    type: SET_CONTACTS,
    contacts,
  }
}

export function removeContact(contactId) {
  store.dispatch({ type: REMOVE_CONTACT, contactId })
  return contactsService.remove(contactId).catch((err) => {
    store.dispatch({ type: CONTACT_UNDO })
    console.error('Cannot remove contact:', err)
    throw err
  })
}

export function setFilter(filterBy) {
  console.log(filterBy)
  return {
    type: SET_FILTER,
    filterBy,
  }
}

export function setSort(sortBy) {
  return {
    type: SET_SORT,
    sortBy,
  }
}
