import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Loading = () => {
  const navigate = useNavigate()
  const { pathname } = window.location

  // When used as the /loading route (e.g. after payment), go back home
  useEffect(() => {
    if (pathname !== '/loading') return
    const t = setTimeout(() => navigate('/'), 3000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="bg-linear-to-b from-[#531B81] to-[#29184B] backdrop-opacity-60 flex items-center justify-center h-screen w-full text-white text-2xl">
      <div className="w-10 h-10 rounded-full border-3 border-white border-t-transparent animate-spin"></div>
    </div>
  )
}

export default Loading
