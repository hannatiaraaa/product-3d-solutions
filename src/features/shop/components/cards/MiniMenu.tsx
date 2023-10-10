import React from 'react';
import Image from 'next/image';
import type { TTrendingCategory } from 'types/shop/Trending.type';
import Badge from '../Badge';

const MiniMenu = ({ name, icon, badge }: TTrendingCategory) => {
  return (
    <div className='text-center'>
      <div className='relative max-w-[5rem] aspect-square self-center rounded-full bg-white p-2'>
        {badge && (
          <Badge
            number={badge}
            textSizeType='md'
            size={6}
            distance={1}
          />
        )}

        <Image
          alt={name}
          src={icon}
          className='relative'
        />
      </div>
      <p className='mt-4 font-semibold'>{name}</p>
    </div>
  );
};

export default MiniMenu;
