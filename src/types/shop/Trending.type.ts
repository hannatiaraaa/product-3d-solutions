import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type TTrendingCategory = {
  name: string;
  icon: string | StaticImport;
  badge?: number;
};
