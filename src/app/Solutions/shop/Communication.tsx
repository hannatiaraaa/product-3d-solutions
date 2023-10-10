import React from 'react';
import ChatBanner from 'features/shop/components/cards/ChatBanner';
import type { TShopCommunication } from 'types/shop';

export const RenderShopCommunication = ({ communicationList }: TShopCommunication) => {
  return communicationList.map((name) => {
    return (
      <ChatBanner
        key={name}
        name={name}
      />
    );
  });
};
