cat > src/pages/Home.jsx << 'EOF'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'

const Home = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Blazing Fast',
      description: 'Built with Vite for instant hot reload and optimal performance',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '🎨',
      title: 'Beautiful UI',
      description: 'Stunning design with Tailwind CSS and smooth animations',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: '🔄',
      title: 'Real-time Sync',
      description: 'Local storage integration for persistent data',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: '🌙',
      title: 'Dark Mode',
      description: 'Beautiful dark/light theme with system preference',
      color: 'from-indigo-400 to-purple-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-custom">
      {/* Hero Section */}
      <section className="text-center py-20 animate-fade-in">
        <div className="glass p-12 rounded-3xl shadow-2xl inline-block mx-auto mb-12">
          <div className="text-8xl mb-6 animate-bounce-gentle">🚀</div>
          <h1 className="text-6xl md:text-7xl font-black text-gradient mb-6 leading-tight">
            React Week 3
            <span className="block text-3xl md:text-4xl mt-4 opacity-90">
              Master Frontend Development
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build <span className="font-bold text-primary-600">beautiful</span>, <span className="font-bold text-purple-600">fast</span>, and <span className="font-bold text-green-600">responsive</span> React applications with modern tools
          </p>
          <Link to="/tasks">
            <Button className="btn-primary text-lg px-8 py-4 text-xl animate-pulse-glow">
              🎯 Explore Task Manager →
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 animate-slide-up">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center text-gradient mb-16">
            Why This Project Rocks! 🎸
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="text-center p-8 border-0">
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <Card className="text-center p-12 border-0">
          <h2 className="text-4xl font-black text-gradient mb-12">
            Built with Modern Tech Stack
          </h2>
          <div className="flex justify-center items-center space-x-12 text-3xl">
            <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
              <span className="text-6xl mb-2">⚛️</span>
              <span className="text-sm font-bold text-gray-600 dark:text-gray-400">React 18</span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
              <span className="text-6xl mb-2">🎨</span>
              <span className="text-sm font-bold text-gray-600 dark:text-gray-400">Tailwind</span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
              <span className="text-6xl mb-2">⚡</span>
              <span className="text-sm font-bold text-gray-600 dark:text-gray-400">Vite</span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
              <span className="text-6xl mb-2">🔄</span>
              <span className="text-sm font-bold text-gray-600 dark:text-gray-400">Router</span>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}

export default Home
EOF
