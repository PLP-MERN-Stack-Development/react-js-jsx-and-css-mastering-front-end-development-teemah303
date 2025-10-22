import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'

const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Add, complete, and filter tasks with local storage persistence',
      icon: '✅',
      path: '/tasks'
    },
    {
      title: 'API Integration',
      description: 'Fetch and display data from JSONPlaceholder with search and pagination',
      icon: '🌐',
      path: '/api-demo'
    },
    {
      title: 'Responsive Design',
      description: 'Beautiful UI that works perfectly on all devices',
      icon: '📱',
      path: '/'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          React Week 3
          <span className="block text-blue-600 text-2xl md:text-3xl mt-2">
            Mastering Frontend Development
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          A comprehensive React application demonstrating component architecture, 
          state management, API integration, and responsive design with Tailwind CSS.
        </p>
        <Link to="/tasks">
          <Button size="large" className="text-lg">
            Get Started 🚀
          </Button>
        </Link>
      </section>

      {/* Features Grid */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Project Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} hover className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {feature.description}
              </p>
              <Link to={feature.path}>
                <Button variant="outline">
                  Explore Feature
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="text-center">
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Built With Modern Tech Stack
          </h2>
          <div className="flex justify-center space-x-8 text-2xl">
            <span className="text-[#61DAFB]">⚛️ React</span>
            <span className="text-[#06B6D4]">🎨 Tailwind</span>
            <span className="text-[#764ABC]">🔄 React Router</span>
            <span className="text-[#FFD02C]">⚡ Vite</span>
          </div>
        </Card>
      </section>
    </div>
  )
}

export default Home