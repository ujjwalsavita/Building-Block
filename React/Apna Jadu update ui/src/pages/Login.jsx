import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { assets, dummyUserData } from '../assets/assets'
import FloatText from '../components/FloatText'

const inputClass =
  'w-full mt-1 px-4 py-2.5 rounded-full border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 text-sm text-[#1f2d1c] dark:text-white placeholder:text-gray-400 outline-none focus:border-[#46ad4f] focus:ring-2 focus:ring-[#46ad4f]/30 transition'

const Login = () => {
  const { setUser, theme } = useAppContext()
  const [state, setState] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ ...dummyUserData, name: state === 'register' ? name : dummyUserData.name, email })
  }

  return (
    <div className="flex flex-col items-center gap-6 m-auto px-4">
      <img
        src={theme === 'dark' ? assets.logo_full_dark : assets.logo_full_dark}
        alt="ApnaJadu"
        className="w-48 select-none"
      />

      <form
        onSubmit={handleSubmit}
        style={{ '--fa': '-3px' }}
        className="float-card flex flex-col gap-4 p-8 py-10 w-80 sm:w-90 rounded-3xl border border-[#46ad4f]/25 bg-white/90 dark:bg-white/5 backdrop-blur shadow-xl text-gray-600 dark:text-[#cfe3c4]"
      >
        <p className="text-2xl font-semibold text-center text-[#1f2d1c] dark:text-white">
          <FloatText text={state === 'login' ? 'Welcome back' : 'Create account'} />
        </p>
        <p className="-mt-2 text-sm text-center text-[#6b8f5e] dark:text-[#a7c79a]">
          {state === 'login' ? 'Log in to keep chatting with ApnaJadu' : 'Sign up to start chatting with ApnaJadu'}
        </p>

        {state === 'register' && (
          <label className="text-sm">
            Name
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Your name"
              className={inputClass}
              type="text"
              required
            />
          </label>
        )}
        <label className="text-sm">
          Email
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="you@example.com"
            className={inputClass}
            type="email"
            required
          />
        </label>
        <label className="text-sm">
          Password
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="••••••••"
            className={inputClass}
            type="password"
            required
          />
        </label>

        <button
          type="submit"
          className="sticker-item mt-2 w-full py-2.5 rounded-full bg-linear-to-r from-[#46ad4f] to-[#b6d74b] hover:brightness-105 text-[#16351b] font-semibold cursor-pointer"
        >
          {state === 'register' ? 'Create Account' : 'Login'}
        </button>

        <p className="text-sm text-center">
          {state === 'register' ? 'Already have an account? ' : 'New to ApnaJadu? '}
          <span
            onClick={() => setState(state === 'register' ? 'login' : 'register')}
            className="text-[#2f8a3c] dark:text-[#7ed957] font-semibold cursor-pointer hover:underline"
          >
            {state === 'register' ? 'Log in' : 'Sign up'}
          </span>
        </p>
      </form>
    </div>
  )
}

export default Login