import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyChats, dummyPublishedImages, dummyUserData } from '../assets/assets'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [chats, setChats] = useState([])
  const [selectedChat, setSelectedChat] = useState(null)
  const [publishedImages, setPublishedImages] = useState(dummyPublishedImages)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  // Fake "fetch" — later this will call the backend
  const fetchUser = async () => {
    setUser(dummyUserData)
  }

  const fetchUsersChats = async () => {
    setChats(dummyChats)
    setSelectedChat(dummyChats[0])
  }

  const createNewChat = () => {
    const newChat = {
      _id: Date.now().toString(),
      userId: user?._id,
      name: 'New Chat',
      messages: [],
      updatedAt: new Date().toISOString(),
    }
    setChats((prev) => [newChat, ...prev])
    setSelectedChat(newChat)
    navigate('/')
  }

  const deleteChat = (chatId) => {
    const remaining = chats.filter((chat) => chat._id !== chatId)
    setChats(remaining)
    if (selectedChat?._id === chatId) setSelectedChat(remaining[0] || null)
  }

  // Add a message to a chat and keep chats + selectedChat in sync
  const addMessage = (chatId, message) => {
    const update = (chat) => {
      if (chat._id !== chatId) return chat
      const name = chat.messages.length === 0 && message.role === 'user'
        ? message.content.slice(0, 40)
        : chat.name
      return { ...chat, name, messages: [...chat.messages, message], updatedAt: new Date().toISOString() }
    }
    setChats((prev) => prev.map(update))
    setSelectedChat((prev) => (prev ? update(prev) : prev))
  }

  const logout = () => {
    setUser(null)
    setChats([])
    setSelectedChat(null)
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    if (user) fetchUsersChats()
  }, [user?._id])

  useEffect(() => {
    fetchUser()
  }, [])

  const value = {
    navigate, user, setUser, fetchUser, chats, setChats, selectedChat, setSelectedChat,
    publishedImages, setPublishedImages, theme, setTheme, createNewChat, deleteChat, addMessage, logout,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
