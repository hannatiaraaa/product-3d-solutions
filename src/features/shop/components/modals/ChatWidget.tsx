import React from 'react';
import { FaPaperPlane, FaUserCircle } from 'react-icons/fa';
import { MdInsertEmoticon } from 'react-icons/md';
import { FaCirclePlus } from 'react-icons/fa6';
import Image from 'next/image';
import payeverMessage from 'assets/payeverMessage.svg';

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
};

const ChatWidget = ({ isOpen, children }: Props) => {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } z-10 bg-black/70 backdrop-blur-xl border-[1.5px] border-border-container rounded-xl w-3/4 lg:w-1/5 h-[36rem] absolute bottom-[7%] right-[3%] flex flex-col justify-between py-2`}
    >
      <p className='text-white font-semibold text-sm text-center'>payever Shop Bot</p>
      <div className='bg-chat-base h-5/6 p-2'>{children}</div>
      <div className='flex justify-between items-center gap-2 w-full py-2 px-3'>
        <span className='text-chat-base'>
          <FaUserCircle className='text-3xl' />
        </span>
        <div className='flex items-center rounded-2xl bg-chat-base gap-1 px-2'>
          <input
            className='border-0 outline-0 text-white focus:outline-0 flex-1 bg-transparent w-full h-8 text-base'
            type='chat message'
            placeholder='Aa'
          />
          <button className=' text-neutral-600'>
            <MdInsertEmoticon className='text-2xl' />
          </button>
          <button className='text-neutral-600'>
            <FaCirclePlus className='text-lg' />
          </button>
        </div>
        <button className='rounded-full h-7 aspect-square grid place-items-center text-center text-white bg-[#0371E2]'>
          <FaPaperPlane className='text-md' />
        </button>
      </div>
      <div className='bg-neutral-500 w-full h-[0.5px]' />
      <Image
        src={payeverMessage}
        alt='payever'
        className='h-4 w-full text-center mt-2 mb-1'
      />
    </div>
  );
};

export default ChatWidget;
