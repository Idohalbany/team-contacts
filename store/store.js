import { ContactsReducer } from './Contacts.reducer.js'
const { createStore, combineReducers } = Redux
const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

const rootReducer = combineReducers({
  contactsModule: ContactsReducer,
})
export const store = createStore(rootReducer, middleware)

// store.subscribe(() => {
//   console.log('**** Store state changed: ****')
//   console.log('storeState:\n', store.getState())
//   console.log('*******************************')
// })
