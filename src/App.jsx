import { useEffect, useState } from 'react'
import './stylesheets/App.css'
import LoginComponent from './components/auth/LoginComponent'
import SkypeComponent from './components/SkypeComponent'
import * as Helper from './Helpers/Helper'

function App() {
  const [user, setUser] = useState(Helper.getUser())

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME
  }, [])
  return (
    <>
      {
        user._id
        ? <SkypeComponent user={user} setUser={setUser} />
        : <LoginComponent setUser={setUser} />
      }
    </>
  )
}

export default App