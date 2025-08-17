import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-semibold transition-all duration-300 flex items-center justify-center gap-2 rounded-2xl';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-600/20 hover:bg-gray-600/30 border border-gray-600 text-gray-300 hover:text-white',
    success: 'bg-green-600/20 hover:bg-green-600/30 border border-green-600 text-green-400',
    warning: 'bg-yellow-600/20 hover:bg-yellow-600/30 border border-yellow-600 text-yellow-400'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;