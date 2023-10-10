import React, { useState } from 'react';
import { poppins } from 'configs/fonts';
import Button from './components/Button';
import Navbar from './components/nav/navbar';
import type { TShopCommunication, TShopMarketing } from 'types/shop';
import { RenderShopMarketing } from 'app/Solutions/shop/Marketing';
import Rating from './components/Rating';
import CoffeeContainer from './components/cards/CoffeeContainer';
import { AiFillCaretRight } from 'react-icons/ai';
import MiniMenu from './components/cards/MiniMenu';
import { trendingCategory, trendingSmallDrinks } from 'configs/shop/Trending';
import Amount from './components/cards/Amount';
import ChatWidget from './components/modals/ChatWidget';
import { RenderShopCommunication } from 'app/Solutions/shop/Communication';

const PayeverShop = ({
  marketingList = [],
  communicationList = [],
}: Partial<TShopMarketing> & Partial<TShopCommunication>) => {
  const [totalAmount, setTotalAmount] = useState<number>(1);

  const onIncrement = () => {
    setTotalAmount((prevState) => prevState + 1);
  };

  const onDecrement = () => {
    setTotalAmount((prevState) => (prevState > 0 ? prevState - 1 : prevState));
  };

  return (
    <main className={`px-4 md:px-8 pt-4 pb-12 ${poppins.className} relative`}>
      <ChatWidget isOpen={communicationList.length > 0}>
        <RenderShopCommunication communicationList={communicationList} />
      </ChatWidget>
      <Navbar SocialIcons={<RenderShopMarketing marketingList={marketingList} />} />
      <div className='bg-shop-bg-trending flex flex-col lg:flex-row items-center justify-between gap-1 py-2 px-16 rounded-xl'>
        <div className='relative block md:hidden'>
          <CoffeeContainer type='small' />
        </div>
        <div className='hidden md:relative md:block lg:hidden'>
          <CoffeeContainer type='big' />
        </div>
        <div className='lg:w-1/3 flex flex-col gap-8'>
          <h1 className='text-2xl md:text-5xl font-semibold'>Caramel Ribbon</h1>
          <div className='flex flex-row gap-4'>
            <Rating value={4} />
            <h1 className='font-bold text-lg md:text-2xl text-shop-primary'>$ 39.00</h1>
          </div>
          <p className='text-sm md:text-base'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quas tenetur officia est voluptatem
            deleniti, corrupti, culpa quae sed suscipit, autem ipsum fugiat fugit laborum impedit nostrum. Accusantium,
            corporis officia.
          </p>
          <h1 className='font-bold'>Serve with</h1>
          <div className='flex flex-row items-center gap-12'>
            {trendingCategory.map(({ name, icon, badge }) => (
              <MiniMenu
                key={name}
                name={name}
                icon={icon}
                badge={badge}
              />
            ))}
          </div>
          <div className='flex flex-row gap-8'>
            <Amount
              className='flex-1'
              total={totalAmount}
              onDecrement={onDecrement}
              onIncrement={onIncrement}
            />
            <Button className='gap-1 md:gap-4 flex-1'>
              <p className='text-sm md:text-base'>Add To Chart</p>
              <AiFillCaretRight className='text-sm md:text-base ' />
            </Button>
          </div>
        </div>
        <div className='hidden lg:block'>
          <CoffeeContainer type='big' />
        </div>
        <div className='hidden xl:flex flex-col justify-evenly items-end gap-4 '>
          {trendingSmallDrinks.map(({ color }) => (
            <CoffeeContainer
              key={color}
              bgColor={color}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default PayeverShop;
