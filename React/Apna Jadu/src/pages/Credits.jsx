import { useEffect, useState } from 'react'
import { dummyPlans } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import Loading from './Loading'

const Credits = () => {
  const { setUser } = useAppContext()
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => { setPlans(dummyPlans); setLoading(false) }, 600)
    return () => clearTimeout(t)
  }, [])

  // Frontend only: just add the credits locally
  const purchasePlan = (plan) => {
    setUser((prev) => ({ ...prev, credits: prev.credits + plan.credits }))
    alert(`${plan.name} plan purchased! +${plan.credits} credits (demo)`)
  }

  if (loading) return <Loading />

  return (
    <div className="max-w-7xl h-screen overflow-y-scroll mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-semibold text-center mb-10 xl:mt-30 text-gray-800 dark:text-white">Credit Plans</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className={`border border-gray-200 dark:border-purple-700 rounded-lg shadow hover:shadow-lg transition-shadow p-6 w-72 flex flex-col ${
              plan._id === 'pro' ? 'bg-purple-50 dark:bg-purple-900' : 'bg-white dark:bg-transparent'
            }`}
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-300 mb-4">
                ${plan.price}
                <span className="text-base font-normal text-gray-600 dark:text-purple-200"> / {plan.credits} credits</span>
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-purple-200 space-y-1">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => purchasePlan(plan)}
              className="mt-6 bg-purple-500 hover:bg-purple-600 active:bg-purple-800 text-white font-medium py-2 rounded transition-colors cursor-pointer"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Credits
