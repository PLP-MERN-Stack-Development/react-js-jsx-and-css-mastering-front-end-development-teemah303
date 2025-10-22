import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TaskManager from './pages/TaskManager'
import Layout from './components/Layout'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tasks" element={<TaskManager />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
