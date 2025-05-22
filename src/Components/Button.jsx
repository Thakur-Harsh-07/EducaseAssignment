import React from 'react';


const Button = ({
  children,
  variant = 'primary', // primary, secondary, outline
  size = 'medium', // small, medium, large
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'w-[335px] h-[46px] rounded-[6px] font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[#6C25FF] text-white  focus:ring-[#6C25FF]',
    secondary: 'bg-[#6C25FF4B] text-[#1D2226]  focus:ring-[#6C25FF]',
    outline: 'border-2 border-[#6C25FF] text-[#6C25FF] hover:bg-[#6C25FF]/10 focus:ring-[#6C25FF]'
  };

  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;