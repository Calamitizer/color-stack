import { CsSelector } from '@client/redux/types';
import { FilterState } from '@client/redux/filter/state';
import { createSelector } from 'reselect';

export const getFilterState: CsSelector<FilterState> = ({ filter }) => filter;

export const getFilterColor: CsSelector<string | null> = createSelector(
  getFilterState,
  ({ color }) => color
);
