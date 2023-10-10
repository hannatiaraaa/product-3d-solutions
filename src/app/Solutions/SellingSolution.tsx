import LandingScene from 'features/landing/LandingScene';
import ProductsScene from 'features/products/ProductsScene';
import PayeverShop from 'features/shop/PayeverShop';
import type { TPanelConfig } from 'types/panelConfig.type';
import type { TShopCommunication, TShopMarketing } from 'types/shop';

type Props = Partial<TPanelConfig> & Partial<TShopMarketing> & Partial<TShopCommunication>;

export const RenderSellingSolution = ({ name, isToggled, marketingList = [], communicationList = [] }: Props) => {
  if (isToggled === false) {
    return <LandingScene />;
  } else {
    switch (name) {
      case 'payever Shop':
        return (
          <div className='bg-white rounded-md'>
            <PayeverShop
              marketingList={marketingList}
              communicationList={communicationList}
            />
          </div>
        );

      case 'payever Products':
        return <ProductsScene />;

      default:
        return <LandingScene />;
    }
  }
};
