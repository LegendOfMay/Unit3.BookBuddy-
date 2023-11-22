import { useState } from 'react'
import bookLogo from './assets/books.png'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Welcome to Book Buddy</h1>
    </>
  )
}

export default App
