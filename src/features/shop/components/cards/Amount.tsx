import React from 'react';

type SymbolProps = {
  symbol: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const RenderSymbol = ({ onClick, symbol }: SymbolProps) => (
  <button
    className='flex-1'
    onClick={onClick}
  >
    <p className='text-sm md:text-base'>{symbol}</p>
  </button>
);

const RenderDivider = () => <div className='h-8 w-[0.7px] bg-gray-300' />;

type Props = {
  total: number;
  className?: string;
  onDecrement?: React.MouseEventHandler<HTMLButtonElement>;
  onIncrement?: React.MouseEventHandler<HTMLButtonElement>;
};

const Amount = ({ total, onDecrement, onIncrement, className }: Props) => {
  return (
    <div className={`bg-white flex flex-row justify-evenly place-items-center ${className}`}>
      <RenderSymbol
        onClick={onDecrement}
        symbol='-'
      />
      <RenderDivider />
      <div className='flex-1 items-center text-center '>
        <p>{total}</p>
      </div>
      <RenderDivider />
      <RenderSymbol
        onClick={onIncrement}
        symbol='+'
      />
    </div>
  );
};

export default Amount;
