cat > src/pages/TaskManager.jsx << 'EOF'
import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Card from '../components/Card'
import Button from '../components/Button'

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('all')

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date().toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const completedTasks = tasks.filter(task => task.completed).length
  const totalTasks = tasks.length
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0

  return (
    <div className="min-h-screen bg-gradient-custom py-8">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center">
          <div className="glass p-8 rounded-3xl inline-block">
            <h1 className="text-5xl font-black text-gradient mb-4">
              Task Master 🎯
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {completedTasks} of {totalTasks} tasks conquered! 🚀
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-4">
              <div 
                className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {Math.round(progress)}% Complete - Keep going! 💪
            </p>
          </div>
        </div>

        {/* Add Task Section */}
        <Card className="p-8 border-0">
          <div className="flex gap-4 mb-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              placeholder="What needs to be done? 🎯"
              className="input-field flex-1 text-lg"
            />
            <Button 
              onClick={addTask} 
              disabled={!newTask.trim()}
              className="btn-primary text-lg px-8"
            >
              Add Task +
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 ml-1">
            Press Enter to add quickly ⚡
          </p>
        </Card>

        {/* Filter Buttons */}
        <Card className="p-6 border-0">
          <div className="flex flex-wrap gap-3 justify-between items-center">
            <div className="flex gap-2">
              {['all', 'active', 'completed'].map((filterType) => (
                <Button
                  key={filterType}
                  variant={filter === filterType ? 'primary' : 'outline'}
                  onClick={() => setFilter(filterType)}
                  className="capitalize font-semibold"
                >
                  {filterType === 'all' ? '📋 All' : filterType === 'active' ? '⏳ Active' : '✅ Completed'}
                </Button>
              ))}
            </div>
            
            {completedTasks > 0 && (
              <Button
                variant="danger"
                onClick={clearCompleted}
                className="font-semibold"
              >
                🗑️ Clear Completed
              </Button>
            )}
          </div>
        </Card>

        {/* Tasks List */}
        <Card className="p-8 border-0">
          {filteredTasks.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-8xl mb-4">😴</div>
              <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">
                {tasks.length === 0 ? 'No tasks yet!' : 'No tasks match this filter'}
              </h3>
              <p className="text-gray-500 dark:text-gray-500">
                {tasks.length === 0 
                  ? 'Add your first task above and start being productive! 🚀' 
                  : 'Try changing the filter to see more tasks!'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className={`group flex items-center justify-between p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                    task.completed
                      ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800'
                      : 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 border-blue-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600'
                  }`}
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                        task.completed
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-gray-300 dark:border-gray-500 hover:border-primary-500'
                      }`}
                    >
                      {task.completed && '✓'}
                    </button>
                    <div className="flex-1">
                      <p className={`text-lg font-semibold transition-all duration-300 ${
                        task.completed 
                          ? 'line-through text-gray-500' 
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {task.text}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Added: {task.createdAt}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:opacity-100"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Motivational Quote */}
        <Card className="text-center p-6 border-0">
          <p className="text-gray-600 dark:text-gray-400 italic">
            {completedTasks === totalTasks && totalTasks > 0 
              ? "🎉 Amazing! You've completed all tasks! You're a productivity superstar! 🌟"
              : "Small progress is still progress. Keep going! 💪"}
          </p>
        </Card>
      </div>
    </div>
  )
}

export default TaskManager
EOF
