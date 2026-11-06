import Markdown from 'react-markdown'

const formatTime = (timestamp) =>
  new Date(timestamp).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })

const floatStyle = (timestamp) => ({ '--fa': '-3px', '--bd': `-${(timestamp % 6000) / 1000}s` })

const Message = ({ message }) => {
  if (message.role === 'user') {
    return (
      <div className="flex items-start justify-end my-4 gap-2">
        <div
          className="float-card flex flex-col gap-2 p-2 px-4 bg-linear-to-br from-[#e3f4d7] to-[#f1f8dc] dark:from-[#46ad4f]/25 dark:to-[#b6d74b]/15 border border-[#46ad4f]/30 rounded-2xl max-w-2xl"
          style={floatStyle(message.timestamp)}
        >
          <p className="text-sm text-[#16351b] dark:text-[#eaf7e0] whitespace-pre-wrap">{message.content}</p>
          <span className="text-xs text-[#6b8f5e] dark:text-[#a7c79a]">{formatTime(message.timestamp)}</span>
        </div>
        <div className="w-8 h-8 shrink-0 rounded-full bg-linear-to-r from-[#46ad4f] to-[#b6d74b] text-[#16351b] font-semibold flex items-center justify-center text-sm">
          U
        </div>
      </div>
    )
  }

  return (
    <div
      className={`inline-flex flex-col gap-2 p-2 px-4 max-w-2xl bg-[#f6faf1] dark:bg-[#2f8a3c]/15 border border-[#46ad4f]/25 my-4 ${
        message.isImage ? 'rounded-md' : 'float-card rounded-2xl'
      }`}
      style={message.isImage ? undefined : floatStyle(message.timestamp)}
    >
      {message.isImage ? (
        <img src={message.content} alt="generated" className="w-full max-w-md mt-2 rounded-md" />
      ) : (
        <div className="text-sm text-[#1f2d1c] dark:text-[#eaf7e0] reset-tw">
          <Markdown>{message.content}</Markdown>
        </div>
      )}
      <span className="text-xs text-[#6b8f5e] dark:text-[#a7c79a]">{formatTime(message.timestamp)}</span>
    </div>
  )
}

export default Message