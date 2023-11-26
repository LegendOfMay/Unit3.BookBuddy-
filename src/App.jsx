import { useState } from 'react'
import bookLogo from './assets/books.png'
import { Routes, Route} from "react-router-dom"
import Navigations from './components/Navigations';
import Account from './components/Account';
import Books from './components/Books';
import Login from './components/Login';
import Register from './components/Register';
import SingleBook from './components/SingleBook';


function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Welcome to Book Buddy</h1>

      <nav>
        {/* <Navigations /> */}
      </nav>

      <div>
        <Routes>
        <Route path= '/Account' element={<Account />} />
        <Route path='/Books' element={<Books />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />}/>
        {/* <Route path="/Books/:id" element={<SingleBook />} /> */}
        
        </Routes>

      </div>

    </>
  )
}

export default App
