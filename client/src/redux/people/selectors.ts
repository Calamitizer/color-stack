import { createSelector } from 'reselect';
import Person from '@shared/model/person';
import { CsSelector } from '@client/redux/types';
import { ApiMetadata } from '@client/redux/api-metadata';
import { PeopleState } from '@client/redux/people/state';

export const getPeopleState: CsSelector<PeopleState> = ({ people }) => people;

export const getPeople: CsSelector<Person[]> = createSelector(
  getPeopleState,
  ({ data }) => data
);

export const getPeopleApiMetadata: CsSelector<ApiMetadata> = createSelector(
  getPeopleState,
  ({ apiMetadata }) => apiMetadata
);

export const isLoading: CsSelector<boolean> = createSelector(
  getPeopleApiMetadata,
  ({ loading }) => loading
);

export const hasPeople: CsSelector<boolean> = createSelector(
  getPeople,
  isLoading,
  ({ length }, loading) => length > 0 && !loading
);

export const shouldInitialFetch: CsSelector<boolean> = createSelector(
  getPeopleState,
  ({ doneInitialFetch }) => !doneInitialFetch
);
