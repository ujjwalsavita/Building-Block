import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import ChatBox from './components/ChatBox'
import Credits from './pages/Credits'
import Community from './pages/Community'
import Loading from './pages/Loading'
import Login from './pages/Login'
import { assets } from './assets/assets'
import { useAppContext } from './context/AppContext'

const App = () => {
  const { user } = useAppContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()

  if (pathname === '/loading') return <Loading />

  return (
    <>
      {user && !isMenuOpen && (
        <img
          src={assets.menu_icon}
          alt="menu"
          className="absolute top-3 left-3 w-8 h-8 cursor-pointer md:hidden dark:invert"
          onClick={() => setIsMenuOpen(true)}
        />
      )}

      {user ? (
        <div className="dark:bg-linear-to-b from-[#242124] to-[#000000] dark:text-white">
          <div className="flex h-screen w-screen">
            <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Routes>
              <Route path="/" element={<ChatBox />} />
              <Route path="/credits" element={<Credits />} />
              <Route path="/community" element={<Community />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div className="bg-linear-to-b from-[#242124] to-[#000000] flex items-center justify-center h-screen w-screen">
          <Login />
        </div>
      )}
    </>
  )
}

export default App
