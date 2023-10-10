import React, { useState } from 'react';
import Image from 'next/image';
import ToggleSwitch from 'components/ToggleSwitch';
import type { TPanelConfig } from 'types/panelConfig.type';

type ItemProps = {
  iconColor?: string;
  isCustomToggled?: boolean;
  onSwitch?: () => void;
};

type Props = Partial<TPanelConfig> & ItemProps;

export const PanelItem = ({ name, icon = '', isCustomToggled, onSwitch = () => {} }: Props) => {
  const [isToggled, setIsToggled] = useState(false);

  const updateToggleSwitch = () => {
    setIsToggled(!isToggled);

    onSwitch();
  };

  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-2 items-center'>
        <div className='w-6 aspect-square grid place-items-center'>
          <Image
            src={icon}
            alt={name as string}
          />
        </div>
        <p className='text-white'>{name}</p>
      </div>
      <ToggleSwitch
        checked={isCustomToggled === undefined ? isToggled : isCustomToggled}
        onClick={isCustomToggled === undefined ? updateToggleSwitch : onSwitch}
      />
    </div>
  );
};
