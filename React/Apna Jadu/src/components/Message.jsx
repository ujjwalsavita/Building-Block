import Markdown from 'react-markdown'

const formatTime = (timestamp) =>
  new Date(timestamp).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })

const Message = ({ message }) => {
  if (message.role === 'user') {
    return (
      <div className="flex items-start justify-end my-4 gap-2">
        <div className="flex flex-col gap-2 p-2 px-4 bg-slate-50 dark:bg-[#57317C]/30 border border-[#80609F]/30 rounded-md max-w-2xl">
          <p className="text-sm dark:text-white whitespace-pre-wrap">{message.content}</p>
          <span className="text-xs text-gray-400 dark:text-[#B1A6C0]">{formatTime(message.timestamp)}</span>
        </div>
        <div className="w-8 h-8 shrink-0 rounded-full bg-linear-to-r from-[#A456F7] to-[#3D81F6] text-white flex items-center justify-center text-sm font-medium">
          U
        </div>
      </div>
    )
  }

  return (
    <div className="inline-flex flex-col gap-2 p-2 px-4 max-w-2xl bg-[#A456F7]/10 dark:bg-[#57317C]/30 border border-[#80609F]/30 rounded-md my-4">
      {message.isImage ? (
        <img src={message.content} alt="generated" className="w-full max-w-md mt-2 rounded-md" />
      ) : (
        <div className="text-sm dark:text-white reset-tw">
          <Markdown>{message.content}</Markdown>
        </div>
      )}
      <span className="text-xs text-gray-400 dark:text-[#B1A6C0]">{formatTime(message.timestamp)}</span>
    </div>
  )
}

export default Message
