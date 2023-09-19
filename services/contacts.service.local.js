// contacts service

import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'contactsDB'

_createContacts()

export const contactsService = {
  query,
  getById,
  save,
  remove,
  getEmptyContacts,
  getDefaultFilter,
}

// query //

function query() {
  return storageService.query(STORAGE_KEY).then((contacts) => {
    let filteredContacts = contacts
    // if (filterBy.status) {
    //   filteredContacts = filteredContacts.filter((contact) => contact.status === filterBy.status)
    // }
    // if (filterBy.searchTxt) {
    //   filteredContacts = filteredContacts.filter((contact) =>
    //     contact.txt.includes(filterBy.searchTxt)
    //   )
    // }
    return filteredContacts
  })
}

// get //

function getById(contactId) {
  return storageService.get(STORAGE_KEY, contactId)
}

// save //

function save(contact) {
  if (contact.id) {
    return storageService.put(STORAGE_KEY, contact)
  } else {
    return storageService.post(STORAGE_KEY, contact)
  }
}

// remove //

function remove(contactId) {
  return storageService.remove(STORAGE_KEY, contactId)
}

// default todo //

function getEmptyContacts() {
  return { name: '', mail: '', phone: '' }
}

// default filter //

function getDefaultFilter() {
  return { name: '', mail: '', phone: '' }
}

// create todos //

function _createContacts() {
  let contacts = utilService.loadFromStorage(STORAGE_KEY)
  if (!contacts || !contacts.length) {
    contacts = [
      { name: 'Ido Halbany', mail: 'ido@mail.com', phone: '0548849292', id: utilService.makeId() },
      {
        name: 'Nati Feldbaum',
        mail: 'nati@mail.com',
        phone: '0544839492',
        id: utilService.makeId(),
      },
    ]
    utilService.saveToStorage(STORAGE_KEY, contacts)
  }
}
