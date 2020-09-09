import { createStore } from 'redux';
import { CsStore } from '@client/redux/types';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import { trivialCsState } from '@client/redux/state';
import reducer from '@client/redux/reducer';

const configureStore = (state = trivialCsState()): CsStore =>
  createStore(
    reducer,
    state,
    // tslint:disable-next-line: no-unsafe-any
    // `devToolsEnhancer` is not typed as generic...
    devToolsEnhancer({})
  );

export default configureStore;
