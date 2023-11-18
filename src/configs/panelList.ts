import type { TPanelConfig } from 'types/panelConfig.type';

const icons = {
  shop: require('assets/panelConfig/shop.svg'),
  products: require('assets/panelConfig/products.svg'),
  amazon: require('assets/panelConfig/amazon.svg'),
  ebay: require('assets/panelConfig/ebay.svg'),
  facebook: require('assets/panelConfig/facebook.svg'),
  instagram: require('assets/panelConfig/instagram.svg'),
  pinterest: require('assets/panelConfig/pinterest.svg'),
  google_ads: require('assets/panelConfig/google_ads.svg'),
  message: require('assets/panelConfig/message.svg'),
  fb_messenger: require('assets/panelConfig/fb_messenger.svg'),
  whatsapp: require('assets/panelConfig/whatsapp.svg'),
};

const selling: TPanelConfig[] = [
  {
    name: 'Shop',
    icon: icons.shop,
  },
  {
    name: 'Products',
    icon: icons.products,
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
    name: 'Live Chat',
    icon: icons.message,
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
