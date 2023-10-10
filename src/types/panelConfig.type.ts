import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type TPanelConfig = {
  name: string;
  icon?: StaticImport | string;
  isToggled?: boolean;
};
