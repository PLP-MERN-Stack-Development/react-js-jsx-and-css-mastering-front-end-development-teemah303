// components/Button.jsx
const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false,
  className = '' 
}) => {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200'
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white'
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button