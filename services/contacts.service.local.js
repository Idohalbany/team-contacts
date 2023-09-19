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

function query(filterBy = null, sortBy = null) {
  return storageService.query(STORAGE_KEY).then((contacts) => {
    let filteredContacts = contacts
    if (filterBy) {
      filteredContacts = contacts.filter((contact) => {
        const isNameMatch =
          contact.firstName.toLowerCase().includes(filterBy.txt.toLowerCase()) ||
          contact.lastName.toLowerCase().includes(filterBy.txt.toLowerCase())
        const isEmailMatch = contact.mail.toLowerCase().includes(filterBy.mail.toLowerCase())
        const isPhoneMatch = contact.phone.includes(filterBy.phone)
        return isNameMatch && isEmailMatch && isPhoneMatch
      })
    }

    if (sortBy) {
      switch (sortBy) {
        case 'nameAsc':
          filteredContacts.sort((a, b) => a.firstName.localeCompare(b.firstName))
          break
        case 'nameDesc':
          filteredContacts.sort((a, b) => b.firstName.localeCompare(a.firstName))
          break
        case 'emailAsc':
          filteredContacts.sort((a, b) => a.mail.localeCompare(b.mail))
          break
        case 'emailDesc':
          filteredContacts.sort((a, b) => b.mail.localeCompare(a.mail))
          break
        default:
          break
      }
    }
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
  return { firstName: '', lastName: '', mail: '', phone: '', desc: '' }
}

// default filter //

function getDefaultFilter() {
  return { txt: '', mail: '', phone: '' }
}

// create todos //

function _createContacts() {
  let contacts = utilService.loadFromStorage(STORAGE_KEY)
  if (!contacts || !contacts.length) {
    contacts = [
      {
        firstName: 'Ido',
        lastName: 'Halbany',
        mail: 'ido@mail.com',
        phone: '0548849292',
        desc: 'Fullstack dev',
        _id: utilService.makeId(),
      },
      {
        firstName: 'Nati',
        lastName: 'Feldbaum',
        mail: 'nati@mail.com',
        phone: '0544839492',
        desc: 'Fullstack dev',
        _id: utilService.makeId(),
      },
      {
        firstName: 'Alfi',
        lastName: 'Al',
        mail: 'alfi@mail.com',
        phone: '0544849292',
        desc: 'Fullstack dev',
        _id: utilService.makeId(),
      },
      {
        firstName: 'Gal',
        lastName: 'Fel',
        mail: 'gal@mail.com',
        phone: '0544499492',
        desc: 'Fullstack dev',
        _id: utilService.makeId(),
      },
    ]
    utilService.saveToStorage(STORAGE_KEY, contacts)
  }
}
