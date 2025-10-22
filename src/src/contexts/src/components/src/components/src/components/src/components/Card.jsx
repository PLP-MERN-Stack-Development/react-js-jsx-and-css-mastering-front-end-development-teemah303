const Card = ({ 
  children, 
  className = '',
  padding = 'medium',
  hover = false 
}) => {
  const paddingClasses = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  }

  return (
    <div className={`
      bg-white dark:bg-gray-800 
      rounded-xl 
      shadow-lg 
      border border-gray-200 dark:border-gray-700
      transition-all duration-200
      ${hover ? 'hover:shadow-xl hover:scale-[1.02]' : ''}
      ${paddingClasses[padding]}
      ${className}
    `}>
      {children}
    </div>
  )
}

export default Card