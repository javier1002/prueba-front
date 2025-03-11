// src/components/buttons/primaryButton.tsx
import React from 'react';
import '../../assets/css/componets/buttons/primaryButton.css';

interface PrimaryButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, className }) => {
    return (
      <button className={`bg-blue-500 text-white px-4 py-2 rounded ${className}`}>
        {children}
      </button>
    );
  };
  
  export default PrimaryButton;
