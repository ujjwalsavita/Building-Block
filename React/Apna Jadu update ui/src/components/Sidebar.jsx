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

const stickerRow =
  'sticker-item flex items-center gap-3 p-2 pr-4 mt-3 rounded-full border border-gray-200 dark:border-white/15 bg-white dark:bg-white/5 cursor-pointer'

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
        className="w-full max-w-48 cursor-pointer select-none"
        onClick={() => { createNewChat(); setIsMenuOpen(false) }}
      />

      {/* New chat button */}
      <button
        onClick={() => { createNewChat(); setIsMenuOpen(false) }}
        className="sticker-item flex justify-center items-center w-full py-2.5 mt-8 text-[#16351b] font-semibold bg-linear-to-r from-[#46ad4f] to-[#b6d74b] text-sm rounded-full cursor-pointer"
      >
        <span className="mr-2 text-xl leading-none">+</span> New Chat
      </button>

      {/* Search */}
      <div className="flex items-center gap-2 p-3 mt-4 border border-gray-300 dark:border-white/20 rounded-full">
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
      {chats.length > 0 && <p className="mt-4 text-sm select-none">Recent Chats</p>}
      <div className="flex-1 overflow-y-scroll -mx-1 px-1 pb-2 text-sm">
        {filteredChats.map((chat) => (
          <div
            key={chat._id}
            onClick={() => { navigate('/'); setSelectedChat(chat); setIsMenuOpen(false) }}
            className={`${stickerRow} pl-5 rounded-2xl group`}
          >
            <div className="flex-1 overflow-hidden">
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
      <div onClick={() => { navigate('/community'); setIsMenuOpen(false) }} className={stickerRow}>
        <img src={assets.gallery_icon} className="w-5 ml-2 dark:invert" alt="" />
        <p className="text-sm">Community Images</p>
      </div>

      {/* Credits */}
      <div onClick={() => { navigate('/credits'); setIsMenuOpen(false) }} className={stickerRow}>
        <img src={assets.diamond_icon} className="w-5 ml-2 dark:invert" alt="" />
        <div className="flex flex-col text-sm">
          <p>Credits : {user?.credits}</p>
          <p className="text-xs text-gray-400">Purchase credits to use ApnaJadu</p>
        </div>
      </div>

      {/* Dark mode toggle */}
      <label className={`${stickerRow} justify-between`}>
        <span className="flex items-center gap-3 text-sm">
          <img src={assets.theme_icon} className="w-5 ml-2 dark:invert" alt="" />
          Dark Mode
        </span>
        <span className="relative inline-flex">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={theme === 'dark'}
            onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          />
          <span className="w-9 h-5 bg-gray-400 rounded-full peer-checked:bg-[#46ad4f] transition-all"></span>
          <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
        </span>
      </label>

      {/* User account */}
      <div className={`${stickerRow} group`}>
        <img src={assets.user_icon} className="w-7 ml-1 dark:invert" alt="" />
        <p className="flex-1 text-sm truncate">{user ? user.name : 'Login your account'}</p>
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