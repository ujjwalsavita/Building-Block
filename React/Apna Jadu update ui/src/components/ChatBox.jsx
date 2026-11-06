import { useEffect, useRef, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import Message from './Message'
import FruitStickerFooter from '@/components/ui/fruit-sticker-footer'

// Frontend only: fake AI reply until the backend is connected
const fakeReply = (prompt, mode) =>
  mode === 'image'
    ? `https://picsum.photos/seed/${encodeURIComponent(prompt)}/800/800`
    : `This is a demo reply to: **"${prompt}"**\n\nOnce the backend is connected, a real AI response will appear here.`

const ChatBox = () => {
  const containerRef = useRef(null)
  const { selectedChat, theme, user, setUser, addMessage, createNewChat, setPublishedImages } = useAppContext()

  const [loading, setLoading] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [mode, setMode] = useState('text')
  const [isPublished, setIsPublished] = useState(false)

  const messages = selectedChat?.messages || []

  const onSubmit = (e) => {
    e.preventDefault()
    if (!prompt.trim() || loading) return
    if (!selectedChat) return createNewChat()

    const chatId = selectedChat._id
    const text = prompt
    addMessage(chatId, { role: 'user', content: text, timestamp: Date.now(), isImage: false })
    setPrompt('')
    setLoading(true)

    setTimeout(() => {
      addMessage(chatId, {
        role: 'assistant',
        content: fakeReply(text, mode),
        timestamp: Date.now(),
        isImage: mode === 'image',
      })
      if (mode === 'image' && isPublished) {
        setPublishedImages((prev) => [{ imageUrl: fakeReply(text, mode), userName: user.name, prompt: text }, ...prev])
      }
      setUser((prev) => ({ ...prev, credits: Math.max(0, prev.credits - (mode === 'image' ? 2 : 1)) }))
      setLoading(false)
    }, 1200)
  }

  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages.length, loading])

  return (
    <div className="flex-1 flex flex-col justify-between m-5 md:m-10 xl:mx-30 max-md:mt-14 2xl:pr-40">
      {/* Messages */}
      <div ref={containerRef} className="flex-1 mb-5 overflow-y-scroll">
        {/* Welcome screen for an empty chat */}
        {messages.length === 0 && (
          <div className="h-full">
            <FruitStickerFooter
              headline="Let's"
              farewells={['create!', 'imagine!', 'write!', 'explore!']}
              lines={['Ask ApnaJadu anything: text or images.', 'Type your prompt below to start.']}
              showContact={false}
              showBar={false}
              height="100%"
              accent="#A456F7"
              ink={theme === 'dark' ? '#ffffff' : '#1f1f1f'}
              muted={theme === 'dark' ? '#B1A6C0' : '#6b7280'}
              background="transparent"
              fontSans="'Outfit', sans-serif"
              stickers={[]}
            />
          </div>
        )}

        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}

        {/* Typing dots */}
        {loading && (
          <div className="loader flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-white animate-bounce"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-white animate-bounce [animation-delay:0.15s]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-white animate-bounce [animation-delay:0.3s]"></div>
          </div>
        )}
      </div>

      {mode === 'image' && (
        <label className="inline-flex items-center gap-2 mb-3 text-sm mx-auto">
          <p className="text-xs">Publish Generated Image to Community</p>
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
          />
        </label>
      )}

      {/* Prompt input */}
      <form
        onSubmit={onSubmit}
        className="bg-[#eaf7e0]/10 dark:bg-[#583C79]/30 border border-[#80609F]/30 rounded-full w-full max-w-2xl p-3 pl-4 mx-auto flex gap-4 items-center"
      >
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="text-sm pl-3 pr-2 outline-none bg-transparent"
        >
          <option className="dark:bg-purple-900" value="text">Text</option>
          <option className="dark:bg-purple-900" value="image">Image</option>
        </select>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={user?.credits === 0 ? 'Out of credits — buy more' : 'Type your prompt here...'}
          className="flex-1 w-full text-sm outline-none bg-transparent"
          required
        />
        <button disabled={loading} className="cursor-pointer">
          <img src={loading ? assets.stop_icon : assets.send_icon} className="w-8" alt="send" />
        </button>
      </form>
    </div>
  )
}

export default ChatBox