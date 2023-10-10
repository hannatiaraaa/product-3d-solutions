import React from 'react';
import { BiLogoFacebookCircle, BiLogoPinterest } from 'react-icons/bi';
import { AiFillInstagram } from 'react-icons/ai';
import { SiGoogleads } from 'react-icons/si';
import type { TShopMarketing } from 'types/shop';

const SocialIcons = {
  Facebook: BiLogoFacebookCircle,
  Instagram: AiFillInstagram,
  Pinterest: BiLogoPinterest,
  'Google Ads': SiGoogleads,
};

export const RenderShopMarketing = ({ marketingList }: TShopMarketing) => {
  return marketingList.map((value) => {
    const Icon = SocialIcons[value as keyof typeof SocialIcons];
    return (
      <span
        key={value}
        className='text-black aspect-square'
      >
        <Icon className='text-3xl' />
      </span>
    );
  });
};
