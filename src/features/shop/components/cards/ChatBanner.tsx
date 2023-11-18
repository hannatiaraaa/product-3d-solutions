import React from 'react';
import { sacramento } from 'configs/fonts';
import Image from 'next/image';
import logo from 'assets/logo.svg';
import { BsInstagram, BsMessenger, BsWhatsapp } from 'react-icons/bs';
import type { TPanelConfig } from 'types/panelConfig.type';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

type SocialProps = {
  name?: string;
  className?: string;
};

const SocialIcons = {
  Instagram: BsInstagram,
  'Facebook Messenger': BsMessenger,
  WhatsApp: BsWhatsapp,
};

const RenderContainer = ({ children, className }: ContainerProps) => {
  return (
    <button className={`rounded-lg w-full h-[22.5%] flex justify-center items-center mb-2 ${className}`}>
      {children}
    </button>
  );
};

const SocialChatBanner = ({ name, className }: SocialProps) => {
  const Icon = SocialIcons[name as keyof typeof SocialIcons];
  return (
    <RenderContainer className={`flex gap-4 ${className}`}>
      <span className='text-white w-4 object-contain'>
        <Icon className='text-2xl' />
      </span>
      <p className='text-white text-base font-semibold'>{name}</p>
    </RenderContainer>
  );
};

const LiveChatBanner = () => (
  <RenderContainer className='flex flex-col items-center bg-gradient-to-br from-[#C7EEEA] to-[#F0F1FF]'>
    <p className={`${sacramento.className} text-primary font-medium text-4xl`}>livechat</p>
    <Image
      src={logo}
      alt='logo'
      className='h-[0.625rem] object-contain'
    />
  </RenderContainer>
);

const ChatBanner = ({ name }: TPanelConfig) => {
  switch (name) {
    case 'Live Chat':
      return <LiveChatBanner />;

    case 'Instagram':
      return (
        <SocialChatBanner
          name={name}
          className='bg-gradient-to-tr from-[#FFDD55] via-[#C837AB] to-[#6600FF]'
        />
      );

    case 'Facebook Messenger':
      return (
        <SocialChatBanner
          name={name}
          className='bg-gradient-to-r from-[#0496FFD9] via-[#AA40E3D9] to-[#FB5F76D9]'
        />
      );

    case 'WhatsApp':
      return (
        <SocialChatBanner
          name={name}
          className='bg-[#25D366]'
        />
      );

    default:
      return null;
  }
};

export default ChatBanner;
