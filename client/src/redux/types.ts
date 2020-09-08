import { Store } from 'redux';
import { Selector } from 'reselect';
import { CsState } from '@client/redux/state';

export type CsStore = Store<CsState>;

export type CsSelector<T> = Selector<CsState, T>;
