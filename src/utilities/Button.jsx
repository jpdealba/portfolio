import React from 'react';

const Button = ({ onClick, variant = 'primary', children }) => {
  if (variant === 'primary') {
    return (
      <button
        onClick={onClick}
        className="flex justify-center dark:text-backgroundLight
		  items-center px-3 py-2 rounded-md hover:bg-[rgba(0,0,0,0.1)] 
		  dark:bg-[rgba(255,255,255,0.2)] dark:hover:bg-[rgba(255,255,255,0.3)]
		  hover:transition-colors duration-700">
        <span>{children}</span>
      </button>
    );
  } else if (variant === 'ghost')
    return (
      <button
        onClick={onClick}
        className="flex justify-center dark:text-backgroundLight text-background
		  items-center px-3 py-2 rounded-md hover:bg-neutral-200
		  dark:hover:bg-[rgba(255,255,255,0.2)] 
		  hover:transition-colors duration-700">
        <span>{children}</span>
      </button>
    );
  else if (variant === 'secondary')
    return (
      <button
        onClick={onClick}
        className="flex justify-center dark:text-background text-backgroundLight
		  items-center px-7 py-2 rounded-full
		  bg-teal font-semibold text-lg
		  hover:transition-colors duration-700">
        <span>{children}</span>
      </button>
    );
};

export default Button;
