import logo_full from './logo_full_light.svg'
import logo_full_dark from './logo_full_dark.svg'
import menu_icon from './menu_icon.svg'
import close_icon from './close_icon.svg'
import search_icon from './search_icon.svg'
import gallery_icon from './gallery_icon.svg'
import diamond_icon from './diamond_icon.svg'
import theme_icon from './theme_icon.svg'
import user_icon from './user_icon.svg'
import logout_icon from './logout_icon.svg'
import bin_icon from './bin_icon.svg'
import send_icon from './send_icon.svg'
import stop_icon from './stop_icon.svg'

export const assets = {
  logo_full, logo_full_dark, menu_icon, close_icon, search_icon, gallery_icon,
  diamond_icon, theme_icon, user_icon, logout_icon, bin_icon, send_icon, stop_icon,
}

export const dummyUserData = {
  _id: 'u1',
  name: 'Ujjwal Savita',
  email: 'ujjwal@example.com',
  credits: 20,
}

export const dummyChats = [
  {
    _id: 'c1',
    userId: 'u1',
    name: 'What is React?',
    // updatedAt: '2026-10-30T10:15:00.000Z',
    updatedAt: new Date(),
    messages: [
      { role: 'user', content: 'What is React?', isImage: false, timestamp: 1793355300000 },
      {
        role: 'assistant',
        isImage: false,
        timestamp: 1793355305000,
        content:
          '**React** is a JavaScript library for building user interfaces.\n\n- Component based\n- Uses a virtual DOM\n- Maintained by Meta\n\n```jsx\nfunction Hello() {\n  return <h1>Hello World</h1>\n}\n```',
      },
    ],
  },
  {
    _id: 'c2',
    userId: 'u1',
    name: 'A futuristic city at night',
    // updatedAt: '2026-10-29T18:40:00.000Z',
    updatedAt: new Date(),
    messages: [
      { role: 'user', content: 'A futuristic city at night', isImage: false, timestamp: 1793256000000 },
      {
        role: 'assistant',
        isImage: true,
        timestamp: 1793256010000,
        content: 'https://picsum.photos/seed/city/800/800',
      },
    ],
  },
  { _id: 'c3', userId: 'u1', name: 'New Chat', updatedAt: '2026-10-28T09:00:00.000Z', messages: [] },
]

export const dummyPublishedImages = [
  { imageUrl: 'https://picsum.photos/seed/qg1/600/600', userName: 'Ujjwal Savita' },
  { imageUrl: 'https://picsum.photos/seed/qg2/600/600', userName: 'Aman Verma' },
  { imageUrl: 'https://picsum.photos/seed/qg3/600/600', userName: 'Priya Sharma' },
  { imageUrl: 'https://picsum.photos/seed/qg4/600/600', userName: 'Rahul Gupta' },
  { imageUrl: 'https://picsum.photos/seed/qg5/600/600', userName: 'Neha Singh' },
  { imageUrl: 'https://picsum.photos/seed/qg6/600/600', userName: 'Ujjwal Savita' },
  { imageUrl: 'https://picsum.photos/seed/qg7/600/600', userName: 'Karan Mehta' },
  { imageUrl: 'https://picsum.photos/seed/qg8/600/600', userName: 'Sneha Rao' },
]

export const dummyPlans = [
  {
    _id: 'basic', name: 'Basic', price: 10, credits: 100,
    features: ['100 text generations', '50 image generations', 'Standard support', 'Access to basic models'],
  },
  {
    _id: 'pro', name: 'Pro', price: 20, credits: 500,
    features: ['500 text generations', '200 image generations', 'Priority support', 'Access to pro models', 'Faster response time'],
  },
  {
    _id: 'premium', name: 'Premium', price: 30, credits: 1000,
    features: ['1000 text generations', '500 image generations', '24/7 VIP support', 'Access to premium models', 'Dedicated account manager'],
  },
]
