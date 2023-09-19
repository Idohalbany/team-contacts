const { Provider } = ReactRedux
const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { Home } from './views/Home.jsx'
import { About } from './views/About.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { ContactsIndex } from './views/ContactsIndex.jsx'
import { ContactsDetails } from './views/ContactsDetails.jsx'
import { ContactEdit } from './views/ContactEdit.jsx'
import { ContactsAdd } from './cmps/ContactsAdd.jsx'

import { store } from './store/store.js'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className='app'>
          <AppHeader />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contacts' element={<ContactsIndex />} />
            <Route path='/contacts/edit' element={<ContactEdit />} />
            <Route path='/contacts/edit/:contactId' element={<ContactEdit />} />
            <Route path='/contacts/:contactId' element={<ContactsDetails />} />
            <Route path='/contacts/add' element={<ContactsAdd />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </section>
      </Router>
    </Provider>
  )
}
