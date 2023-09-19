const { NavLink } = ReactRouterDOM

export function AppHeader() {
  return (
    <header className='app-header'>
      <h3>Team Contacts</h3>
      <nav>
        <NavLink className='nav-link home' to='/'>
          Home
        </NavLink>
        <NavLink className='nav-link about' to='/about'>
          About
        </NavLink>
        <NavLink className='nav-link contacts-link' to='/contacts'>
          Contacts
        </NavLink>
      </nav>
    </header>
  )
}
