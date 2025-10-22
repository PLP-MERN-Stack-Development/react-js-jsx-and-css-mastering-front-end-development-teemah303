import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} React Week 3 Assignment. Built with ❤️ using React & Tailwind CSS.
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/tasks" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Tasks
            </Link>
            <Link 
              to="/api-demo" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              API Demo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer