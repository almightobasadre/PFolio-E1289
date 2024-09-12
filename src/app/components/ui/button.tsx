import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string; // Optional additional classes for styling
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-4 rounded ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
