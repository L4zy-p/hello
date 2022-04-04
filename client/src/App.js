import React from 'react'

import {
  Footer,
  Header,
  Skills,
  Work
} from './containers'
import {
  Navbar
} from './components'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Skills />
      <Work />
      <Footer />
    </div>
  )
}

export default App