import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className }: Props) => {
  return (
    <button
      className={`bg-shop-primary py-3 px-6 rounded-md text-white flex flex-row items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
