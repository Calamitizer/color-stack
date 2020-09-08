import React from 'react';
import { Provider as ReduxStoreProvider } from 'react-redux';
import { Theme, MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { CsStore } from '@client/redux/types';
// import MtmContent from '@client/MtmContentContainer';

interface Props {
  store: CsStore;
  theme: Theme;
}

const App: React.FC<Props> = ({ store, theme }) => (
  <ReduxStoreProvider {...{ store }}>
    <MuiThemeProvider {...{ theme }}>
      <CssBaseline />

      {/* <MtmContent /> */}
      <span>Wow!</span>
    </MuiThemeProvider>
  </ReduxStoreProvider>
);

export default App;
