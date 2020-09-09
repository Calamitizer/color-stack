import { createSelector } from 'reselect';
import { CsSelector } from '@client/redux/types';
import { ApiMetadata } from '@client/redux/api-metadata';
import { ColorsState } from '@client/redux/colors/state';

export const getColorsState: CsSelector<ColorsState> = ({ colors }) => colors;

export const getColors: CsSelector<string[]> = createSelector(
  getColorsState,
  ({ data }) => data
);

export const getColorsApiMetadata: CsSelector<ApiMetadata> = createSelector(
  getColorsState,
  ({ apiMetadata }) => apiMetadata
);

export const isLoading: CsSelector<boolean> = createSelector(
  getColorsApiMetadata,
  ({ loading }) => loading
);

export const hasColors: CsSelector<boolean> = createSelector(
  getColors,
  isLoading,
  ({ length }, loading) => length > 0 && !loading
);
