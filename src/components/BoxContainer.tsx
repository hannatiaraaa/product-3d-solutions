import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement>;

const BoxContainer = ({ className, ...props }: Props) => {
  return (
    <div
      className={`bg-dark-container rounded-md border-2 border-border-container ${className}`}
      {...props}
    />
  );
};

export default BoxContainer;
