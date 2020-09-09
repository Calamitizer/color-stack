import Person from '@shared/model/person';
import { ApiMetadata, trivialApiMetadata } from '@client/redux/api-metadata';

export interface PeopleState {
  data: Person[];
  doneInitialFetch: boolean;
  apiMetadata: ApiMetadata;
}

export const trivialPeopleState = (): PeopleState => ({
  data: [],
  doneInitialFetch: false,
  apiMetadata: trivialApiMetadata(),
});
