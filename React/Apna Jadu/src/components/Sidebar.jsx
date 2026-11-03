import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const timeAgo = (date) => {
  const seconds = Math.floor((Date.now() - new Date(date)) / 1000)
  const units = [['year', 31536000], ['month', 2592000], ['day', 86400], ['hour', 3600], ['minute', 60]]
  for (const [name, secs] of units) {
    const n = Math.floor(seconds / secs)
    if (n >= 1) return `${n} ${name}${n > 1 ? 's' : ''} ago`
  }
  return 'just now'
}

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const { chats, setSelectedChat, theme, setTheme, user, navigate, createNewChat, deleteChat, logout } = useAppContext()
  const [search, setSearch] = useState('')

  const filteredChats = chats.filter((chat) => {
    const text = chat.messages[0]?.content || chat.name
    return text.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div
      className={`flex flex-col h-screen min-w-72 p-5 dark:bg-linear-to-b from-[#242124]/30 to-[#000000]/30 border-r border-[#80609F]/30 backdrop-blur-3xl transition-all duration-500 max-md:absolute left-0 z-10 bg-white dark:bg-transparent max-md:dark:bg-[#1a1a1a] ${
        !isMenuOpen && 'max-md:-translate-x-full'
      }`}
    >
      {/* Logo */}
      <img
        src={theme === 'dark' ? assets.logo_full_dark : assets.logo_full}
        alt="ApnaJadu"
        className="w-full max-w-48 cursor-pointer"
        onClick={() => navigate('/')}
      />

      {/* New chat button */}
      <button
        onClick={() => { createNewChat(); setIsMenuOpen(false) }}
        className="flex justify-center items-center w-full py-2 mt-10 text-white bg-linear-to-r from-[#A456F7] to-[#3D81F6] text-sm rounded-md cursor-pointer"
      >
        <span className="mr-2 text-xl">+</span> New Chat
      </button>

      {/* Search */}
      <div className="flex items-center gap-2 p-3 mt-4 border border-gray-400 dark:border-white/20 rounded-md">
        <img src={assets.search_icon} className="w-4 dark:invert" alt="" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search conversations"
          className="text-xs placeholder:text-gray-400 outline-none bg-transparent w-full"
        />
      </div>

      {/* Recent chats */}
      {chats.length > 0 && <p className="mt-4 text-sm">Recent Chats</p>}
      <div className="flex-1 overflow-y-scroll mt-3 text-sm space-y-3">
        {filteredChats.map((chat) => (
          <div
            key={chat._id}
            onClick={() => { navigate('/'); setSelectedChat(chat); setIsMenuOpen(false) }}
            className="p-2 px-4 dark:bg-[#57317C]/10 border border-gray-300 dark:border-[#80609F]/15 rounded-md cursor-pointer flex justify-between group"
          >
            <div className="overflow-hidden">
              <p className="truncate w-full">
                {chat.messages.length > 0 ? chat.messages[0].content.slice(0, 32) : chat.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-[#B1A6C0]">{timeAgo(chat.updatedAt)}</p>
            </div>
            <img
              src={assets.bin_icon}
              alt="delete"
              className="hidden group-hover:block w-4 cursor-pointer dark:invert"
              onClick={(e) => { e.stopPropagation(); deleteChat(chat._id) }}
            />
          </div>
        ))}
      </div>

      {/* Community images */}
      <div
        onClick={() => { navigate('/community'); setIsMenuOpen(false) }}
        className="flex items-center gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md cursor-pointer hover:scale-103 transition-all"
      >
        <img src={assets.gallery_icon} className="w-4.5 dark:invert" alt="" />
        <p className="text-sm">Community Images</p>
      </div>

      {/* Credits */}
      <div
        onClick={() => { navigate('/credits'); setIsMenuOpen(false) }}
        className="flex items-center gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md cursor-pointer hover:scale-103 transition-all"
      >
        <img src={assets.diamond_icon} className="w-4.5 dark:invert" alt="" />
        <div className="flex flex-col text-sm">
          <p>Credits : {user?.credits}</p>
          <p className="text-xs text-gray-400">Purchase credits to use ApnaJadu</p>
        </div>
      </div>

      {/* Dark mode toggle */}
      <div className="flex items-center justify-between gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md">
        <div className="flex items-center gap-2 text-sm">
          <img src={assets.theme_icon} className="w-4 dark:invert" alt="" />
          <p>Dark Mode</p>
        </div>
        <label className="relative inline-flex cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={theme === 'dark'}
            onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          />
          <div className="w-9 h-5 bg-gray-400 rounded-full peer-checked:bg-purple-600 transition-all"></div>
          <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
        </label>
      </div>

      {/* User account */}
      <div className="flex items-center gap-3 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md cursor-pointer group">
        <img src={assets.user_icon} className="w-7 rounded-full dark:invert" alt="" />
        <p className="flex-1 text-sm dark:text-primary truncate">{user ? user.name : 'Login your account'}</p>
        {user && (
          <img
            src={assets.logout_icon}
            onClick={logout}
            className="h-5 cursor-pointer hidden dark:invert group-hover:block"
            alt="logout"
          />
        )}
      </div>

      {/* Close (mobile) */}
      <img
        onClick={() => setIsMenuOpen(false)}
        src={assets.close_icon}
        className="absolute top-3 right-3 w-5 h-5 cursor-pointer md:hidden dark:invert"
        alt="close"
      />
    </div>
  )
}

export default Sidebar
