import { createStore } from 'redux';
import { CsStore } from '@client/redux/types';
import { trivialCsState } from '@client/redux/state';
import reducer from '@client/redux/reducer';

const configureStore = (state = trivialCsState()): CsStore =>
  createStore(reducer, state);

export default configureStore;
