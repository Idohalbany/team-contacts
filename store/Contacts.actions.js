import { contactsService } from "../services/contacts.service.local.js"
import { CONTACT_UNDO, REMOVE_CONTACT } from "./Contacts.reducer.js"
import { store } from "./store.js"

export function removeContact(contactId) {
    store.dispatch({ type: REMOVE_CONTACT, contactId })
    return contactsService.remove(contactId)
        .catch(err => {
            store.dispatch({ type: CONTACT_UNDO })
            console.error('Cannot remove contact:', err)
            throw err
        })
}