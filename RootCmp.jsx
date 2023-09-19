const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter
const { Provider } = ReactRedux
import { store } from './store/store.js'

import { AppHeader } from './cmps/AppHeader.jsx'
import { Home } from './views/Home.jsx'
// import { ContactsIndex } from './views/ContactsIndex.jsx'
import { About } from './views/About.jsx'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className='app'>
          <AppHeader />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* <Route path='/contacts' element={<ContactsIndex />} /> */}
          </Routes>
        </section>
      </Router>
    </Provider>
  )
}
