# Create hooks directory
mkdir -p src/hooks

# Create useLocalStorage.js
cat > src/hooks/useLocalStorage.js << 'EOF'
import { useState, useEffect } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(`Error setting localStorage key "${key}":`, error)
    }
  }, [key, value])

  return [value, setValue]
}
EOF
