import React, { useState } from 'react';
import BoxContainer from 'components/BoxContainer';
import PanelConfig from 'features/panelConfig';
import { communication, marketing, selling } from 'configs/panelList';
import { RenderSellingSolution } from './SellingSolution';

type TObject = Record<string, any>;

const SolutionsPage = () => {
  const [selectedSelling, setSelectedSelling] = useState<TObject>({ name: '', isToggled: undefined });
  const [selectedMarketing, setSelectedMarketing] = useState<TObject>({});
  const [selectedCommunication, setSelectedCommunication] = useState<TObject>({});

  const onSellingSwitch = (name: string, isToggled?: boolean) => {
    setSelectedSelling({ name, isToggled });
  };

  const displaySolution = (prevState: TObject, name: string) => {
    if (prevState[name]) {
      delete prevState[name];
    } else {
      prevState[name] = name;
    }
    console.log(prevState, 'prevstate');
    return { ...prevState };
  };

  const onMarketingSwitch = (name: string) => {
    setSelectedMarketing((prevState) => displaySolution(prevState, name));
  };

  const onCommunicationSwitch = (name: string) => {
    setSelectedCommunication((prevState) => displaySolution(prevState, name));
  };

  return (
    <main className='flex flex-col gap-16 justify-between items-center'>
      <BoxContainer className='w-screen'>
        <RenderSellingSolution
          name={selectedSelling.name}
          isToggled={selectedSelling.isToggled}
          marketingList={Object.keys(selectedMarketing)}
          communicationList={Object.keys(selectedCommunication)}
        />
      </BoxContainer>
      <BoxContainer className='px-4 py-8 w-4/5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        <PanelConfig
          title='Selling Solutions'
          data={selling}
          isForceToggled
          onSwitch={onSellingSwitch}
        />
        <PanelConfig
          title='Marketing Solutions'
          data={marketing}
          onSwitch={onMarketingSwitch}
        />
        <PanelConfig
          title='Communication Solutions'
          data={communication}
          onSwitch={onCommunicationSwitch}
        />
      </BoxContainer>
    </main>
  );
};

export default SolutionsPage;
