import { ApiMetadata, trivialApiMetadata } from '@client/redux/api-metadata';

export interface ColorsState {
  data: string[];
  apiMetadata: ApiMetadata;
}

export const trivialColorsState = (): ColorsState => ({
  data: [],
  apiMetadata: trivialApiMetadata(),
});
