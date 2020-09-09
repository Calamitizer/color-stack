import React from 'react';
import { Provider as ReduxStoreProvider } from 'react-redux';
import { Theme, MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { CsStore } from '@client/redux/types';
import InitialDataFetcher from '@client/DataFetcher/InitialDataFetcher';
import CsContent from '@client/CsContent';

interface Props {
  store: CsStore;
  theme: Theme;
}

const App: React.FC<Props> = ({ store, theme }) => (
  <ReduxStoreProvider {...{ store }}>
    <MuiThemeProvider {...{ theme }}>
      <CssBaseline />

      <InitialDataFetcher />
      <CsContent />
    </MuiThemeProvider>
  </ReduxStoreProvider>
);

export default App;
