const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter
const { Provider } = ReactRedux
import { store } from './store/store.js'

import { AppHeader } from './cmps/AppHeader.jsx'
import { Home } from './views/Home.jsx'
import { ContactsIndex } from './views/ContactsIndex.jsx'
import { About } from './views/About.jsx'
import { ContactsDetails } from './views/ContactsDetails.jsx'
import { EditContacts } from './views/EditContacts.jsx'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className='app'>
          <AppHeader />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contacts' element={<ContactsIndex />} />
            <Route path='/contacts/edit' element={<EditContacts />} />
            <Route path='/contacts/:contactId' element={<ContactsDetails />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </section>
      </Router>
    </Provider>
  )
}
