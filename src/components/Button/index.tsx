import React from 'react';


interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large' | 'full';
  label: string;
  onClick?: () => void;
}

export const Button = ({label,...props}: ButtonProps) => {
  
  return (
    <button type="button" {...props}>
      {label}
    </button>
  );
};