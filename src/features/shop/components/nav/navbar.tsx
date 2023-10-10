import Image from 'next/image';
import React, { useState } from 'react';
import Logo from 'assets/shop/logo.svg';
import Link from 'next/link';
import Button from '../Button';
import { BsSearch } from 'react-icons/bs';
import { FaBagShopping } from 'react-icons/fa6';
import { shopNavList } from 'configs/shop/NavList';
import type { TShopNav } from 'types/shop';
import Badge from '../Badge';

type ItemProps = {
  item: TShopNav;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
};

type Props = {
  SocialIcons?: React.ReactNode;
};

const RenderNavBarItem = ({ item, onClick }: ItemProps) => (
  <div className={`${item.isActive ? 'block' : 'hidden'} md:flex flex-col relative`}>
    <li
      onClick={onClick}
      className={`${
        item.isActive ? 'text-black' : 'text-gray-400'
      } h-12 flex items-center justify-center font-semibold`}
    >
      <Link href={'#'}>{item.title}</Link>
    </li>
    <div
      className={`${item.isActive ? 'h-1 w-1/2 bg-shop-primary rounded-tr-md rounded-tl-md' : ''} absolute bottom-0`}
    />
  </div>
);

export default function Navbar({ SocialIcons }: Props) {
  const [navList, setNavList] = useState<TShopNav[]>(shopNavList);

  const handleNavChange = (idx: number) => {
    setNavList((prevState) => {
      prevState.forEach((_val, index) => {
        prevState[index].isActive = false;
      });

      prevState[idx].isActive = true;

      return [...prevState];
    });
  };

  return (
    <nav className='flex flex-row items-center justify-between'>
      <div className='flex flex-row items-center gap-2'>
        <Image
          alt='logo'
          src={Logo}
        />
        <p className='hidden xl:block font-black text-xl'>STARBUCKS</p>
      </div>
      <div className='flex gap-2'>{SocialIcons}</div>
      <div>
        <ul className='flex flex-row items-center gap-4 xl:gap-8 py-4'>
          {navList.map((item, index) => {
            return (
              <RenderNavBarItem
                key={item.title + index}
                item={item}
                onClick={() => handleNavChange(index)}
              />
            );
          })}
        </ul>
      </div>
      <div className='flex flex-row items-center gap-4'>
        <div className='hidden lg:flex border-2 items-center rounded-md'>
          <input
            className='border-0 focus:outline-0 py-2 px-3 w-24 xl:w-auto'
            type='search'
            placeholder='Search'
          />
          <Button className='w-8 h-8 mr-1'>
            <span>
              <BsSearch className='text-white' />
            </span>
          </Button>
        </div>
        <button className='relative shadow-lg p-3 rounded-lg'>
          <Badge number={1} />
          <FaBagShopping className='text-lg' />
        </button>
      </div>
    </nav>
  );
}
