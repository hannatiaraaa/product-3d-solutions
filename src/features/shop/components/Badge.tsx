import React from 'react';

type Props = {
  number?: number;
  size?: number;
  textSizeType?: 'xs' | 'sm' | 'md' | 'lg';
  distance?: number;
};

const Badge = ({ number, size = 5, textSizeType = 'xs', distance = 2 }: Props) => {
  return (
    <span
      className={`absolute inline-flex items-center justify-center -top-${distance} -right-${distance} w-${size} h-${size} text-${textSizeType} bg-shop-primary rounded-full text-white shadow-lg shadow-gray-700 text-sm font-medium`}
    >
      {number}
    </span>
  );
};

export default Badge;
