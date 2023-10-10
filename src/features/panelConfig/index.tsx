import React, { useState } from 'react';
import type { TPanelConfig } from 'types/panelConfig.type';
import { PanelItem } from './Item';

type Props = {
  title?: string;
  data: TPanelConfig[];
  onSwitch?: (name: string, isToggled?: boolean) => void;
  isForceToggled?: boolean;
};

const PanelConfig = ({ title, data, onSwitch = () => {}, isForceToggled }: Props) => {
  const [panelList, setPanelList] = useState([...data]);

  const handleToggle = (name: string, index: number) => {
    if (isForceToggled) {
      const updatedData = panelList.map((item) => {
        if (item.name === name && !item.isToggled) {
          return { ...item, isToggled: true };
        } else {
          return { ...item, isToggled: false };
        }
      });
      setPanelList(updatedData);
      onSwitch(name, updatedData[index].isToggled);
    } else {
      onSwitch(name);
    }
  };

  return (
    <div className='px-5 py-8'>
      <h6 className='font-medium text-white text-base mb-3'>{title}</h6>
      <div className='bg-black-base rounded-2xl px-2 py-1 gap-4'>
        {panelList.map(({ name, icon, isToggled }, index) => (
          <div
            key={name}
            className={`${index > 0 ? 'border-t border-t-dark-container' : ''} py-2`}
          >
            <PanelItem
              name={name}
              icon={icon}
              onSwitch={() => handleToggle(name, index)}
              isCustomToggled={isForceToggled ? isToggled : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanelConfig;
