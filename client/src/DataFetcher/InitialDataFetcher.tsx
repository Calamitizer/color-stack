import React from 'react';
import PeopleFetcher from '@client/DataFetcher/PeopleFetcher';
import ColorsFetcher from '@client/DataFetcher/ColorsFetcher';

const InitialDataFetcher: React.FC = () => (
  <>
    <PeopleFetcher />
    <ColorsFetcher />
  </>
);

export default InitialDataFetcher;
