import React from 'react';
import { EShopColor } from 'configs/Color.enum';
import type { TColor } from 'types/Color.type';
import ProductsScene from 'features/products/ProductsScene';

type Props = {
  bgColor?: TColor | string;
  type?: 'big' | 'small';
};

const CoffeeContainer = ({ bgColor = EShopColor.primary, type = 'small' }: Props) => {
  const width = type === 'big' ? 600 : 150;
  const height = type === 'big' ? 800 : 200;
  return (
    <div className='relative'>
      <div
        style={{ backgroundColor: bgColor }}
        className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ${
          type === 'big' ? 'w-2/3' : 'w-3/4'
        } rounded-full flex items-center justify-center aspect-square`}
      ></div>
      <ProductsScene
        className='relative'
        model='coffee'
        width={width}
        height={height}
      />
    </div>
  );
};

export default CoffeeContainer;
