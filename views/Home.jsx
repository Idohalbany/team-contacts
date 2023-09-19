export function Home() {
  return (
    <section className='home-container'>
      <div className='home-header'>
        <h1>Welcome to Team Contacts!</h1>
        <p>Manage and organize your team's contacts effortlessly.</p>
      </div>
      <div className='home-features'>
        <div className='feature-card'>
          <h2>Search Efficiently</h2>
          <p>Quickly find any contact with our powerful search tool.</p>
        </div>
        <div className='feature-card'>
          <h2>Organize with Tags</h2>
          <p>Group contacts based on projects, departments, or any other criteria.</p>
        </div>
        <div className='feature-card'>
          <h2>Integrate Seamlessly</h2>
          <p>Connect with your favorite tools and apps for smooth integration.</p>
        </div>
        <div className='feature-card'>
          <h2>Safe & Secure</h2>
          <p>Your contacts' data is secured with top-notch encryption methods.</p>
        </div>
      </div>
    </section>
  )
}
