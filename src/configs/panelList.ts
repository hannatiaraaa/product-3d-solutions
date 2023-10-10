import type { TPanelConfig } from 'types/panelConfig.type';

const icons = {
  payever_shop: require('assets/panelConfig/payeverShop.svg'),
  payever_products: require('assets/panelConfig/payeverProducts.svg'),
  amazon: require('assets/panelConfig/amazon.svg'),
  ebay: require('assets/panelConfig/ebay.svg'),
  facebook: require('assets/panelConfig/facebook.svg'),
  instagram: require('assets/panelConfig/instagram.svg'),
  pinterest: require('assets/panelConfig/pinterest.svg'),
  google_ads: require('assets/panelConfig/google_ads.svg'),
  payever_message: require('assets/panelConfig/payeverMessage.svg'),
  fb_messenger: require('assets/panelConfig/fb_messenger.svg'),
  whatsapp: require('assets/panelConfig/whatsapp.svg'),
};

const selling: TPanelConfig[] = [
  {
    name: 'payever Shop',
    icon: icons.payever_shop,
  },
  {
    name: 'payever Products',
    icon: icons.payever_products,
  },
  {
    name: 'Amazon',
    icon: icons.amazon,
  },
  {
    name: 'eBay',
    icon: icons.ebay,
  },
];

const marketing: TPanelConfig[] = [
  {
    name: 'Facebook',
    icon: icons.facebook,
  },
  {
    name: 'Instagram',
    icon: icons.instagram,
  },
  {
    name: 'Pinterest',
    icon: icons.pinterest,
  },
  {
    name: 'Google Ads',
    icon: icons.google_ads,
  },
];

const communication: TPanelConfig[] = [
  {
    name: 'payever Message',
    icon: icons.payever_message,
  },
  {
    name: 'Instagram',
    icon: icons.instagram,
  },
  {
    name: 'Facebook Messenger',
    icon: icons.fb_messenger,
  },
  {
    name: 'WhatsApp',
    icon: icons.whatsapp,
  },
];

export { selling, marketing, communication };
