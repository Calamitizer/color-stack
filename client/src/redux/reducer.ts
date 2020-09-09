import { Reducer, combineReducers } from 'redux';
import { CsState } from '@client/redux/state';
import peopleReducer from '@client/redux/people/reducer';
import colorsReducer from '@client/redux/colors/reducer';
import filterReducer from '@client/redux/filter/reducer';

type CsReducer = Reducer<CsState>;
const reducer: CsReducer = combineReducers<CsState>({
  people: peopleReducer,
  colors: colorsReducer,
  filter: filterReducer,
});

export default reducer;
