import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import PolaroidLineCarousel from '@/components/ui/polaroid-line-carousel'
import Loading from './Loading'

const Community = () => {
  const { publishedImages, theme } = useAppContext()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(t)
  }, [])

  if (loading) return <Loading />

  const isDark = theme === 'dark'

  const slides = publishedImages.map((item, index) => ({
    image: item.imageUrl,
    title: item.imgname || `Creation #${index + 1}`,
    caption: `Created by ${item.userName}`,
    alt: item.prompt || `Image by ${item.userName}`,
  }))

  return (
    <div className="flex-1 min-w-0 h-screen flex flex-col bg-white dark:bg-[#151215]">
      <h2 className="px-6 pt-12 md:pt-8 xl:px-12 text-xl font-semibold text-gray-800 dark:text-purple-100">
        Community Images
      </h2>

      {slides.length > 0 ? (
        <div className="flex-1 min-h-0">
          <PolaroidLineCarousel
            slides={slides}
            height="100%"
            background={isDark ? '#151215' : '#ffffff'}
            ink={isDark ? '#f3e8ff' : '#1f1f1f'}
            string={isDark ? '#a78bfa' : '#8a7f72'}
            ariaLabel="Community images"
          />
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-purple-200 mt-10">No images available.</p>
      )}
    </div>
  )
}

export default Community

