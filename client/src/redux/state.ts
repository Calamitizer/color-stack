import { PeopleState, trivialPeopleState } from '@client/redux/people/state';
import { ColorsState, trivialColorsState } from '@client/redux/colors/state';
import { FilterState, trivialFilterState } from '@client/redux/filter/state';

export interface CsState {
  people: PeopleState;
  colors: ColorsState;
  filter: FilterState;
}

export const trivialCsState = (): CsState => ({
  people: trivialPeopleState(),
  colors: trivialColorsState(),
  filter: trivialFilterState(),
});
