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
  if (contact._id) {
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
      {
        firstName: 'Ella',
        lastName: 'Tay',
        mail: 'ella@mail.com',
        phone: '0544499477',
        desc: 'Frontend dev',
        _id: utilService.makeId(),
      },
      {
        firstName: 'Sam',
        lastName: 'Ray',
        mail: 'sam@mail.com',
        phone: '0544499332',
        desc: 'Backend dev',
        _id: utilService.makeId(),
      },
      {
        firstName: 'Nina',
        lastName: 'Kai',
        mail: 'nina@mail.com',
        phone: '0544499222',
        desc: 'Designer',
        _id: utilService.makeId(),
      },
      {
        firstName: 'Ben',
        lastName: 'May',
        mail: 'ben@mail.com',
        phone: '0544499111',
        desc: 'DevOps',
        _id: utilService.makeId(),
      },
      {
        firstName: 'Oliver',
        lastName: 'Sue',
        mail: 'oliver@mail.com',
        phone: '0544499000',
        desc: 'QA Tester',
        _id: utilService.makeId(),
      },
      {
        firstName: 'Lucy',
        lastName: 'Pie',
        mail: 'lucy@mail.com',
        phone: '0544499555',
        desc: 'Product Manager',
        _id: utilService.makeId(),
      },
      {
        firstName: 'Alex',
        lastName: 'Lue',
        mail: 'alex@mail.com',
        phone: '0544499666',
        desc: 'UX Researcher',
        _id: utilService.makeId(),
      },
      {
        firstName: 'Tina',
        lastName: 'Wu',
        mail: 'tina@mail.com',
        phone: '0544499777',
        desc: 'Data Scientist',
        _id: utilService.makeId(),
      },
      {
        firstName: 'Oscar',
        lastName: 'Roe',
        mail: 'oscar@mail.com',
        phone: '0544499888',
        desc: 'Database Admin',
        _id: utilService.makeId(),
      },
      {
        firstName: 'Mia',
        lastName: 'Kuo',
        mail: 'mia@mail.com',
        phone: '0544499999',
        desc: 'Security Analyst',
        _id: utilService.makeId(),
      },
    ]
    utilService.saveToStorage(STORAGE_KEY, contacts)
  }
}
