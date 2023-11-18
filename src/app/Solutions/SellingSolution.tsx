import LandingScene from 'features/landing/LandingScene';
import ProductsScene from 'features/products/ProductsScene';
import ShopExample from 'features/shop/ShopExample';
import type { TPanelConfig } from 'types/panelConfig.type';
import type { TShopCommunication, TShopMarketing } from 'types/shop';

type Props = Partial<TPanelConfig> & Partial<TShopMarketing> & Partial<TShopCommunication>;

export const RenderSellingSolution = ({ name, isToggled, marketingList = [], communicationList = [] }: Props) => {
  if (isToggled === false) {
    return <LandingScene />;
  } else {
    switch (name) {
      case 'Shop':
        return (
          <div className='bg-white rounded-md'>
            <ShopExample
              marketingList={marketingList}
              communicationList={communicationList}
            />
          </div>
        );

      case 'Products':
        return <ProductsScene />;

      default:
        return <LandingScene />;
    }
  }
};
