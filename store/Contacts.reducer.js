const initialState = {
  contacts: [],
  filterBy: { status: '', searchTxt: '' },
  user: null,
}

export function ContactsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CONTACTS':
      return { ...state, contacts: action.contacts }
    case 'SET_FILTER':
      return { ...state, filterBy: action.filterBy }
    case 'SET_USER':
      return { ...state, user: action.user }
    default:
      return state
  }
}
