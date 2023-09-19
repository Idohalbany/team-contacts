const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter
const { Provider } = ReactRedux
import { store } from './public/store/store.js'

import { AppHeader } from './public/cmps/AppHeader.jsx'
import { Home } from './public/views/Home.jsx'
import { ContactsIndex } from './public/views/ContactsIndex.jsx'
import { About } from './public/views/About.jsx'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className='app'>
          <AppHeader />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<ContactsIndex />} />
          </Routes>
        </section>
      </Router>
    </Provider>
  )
}
