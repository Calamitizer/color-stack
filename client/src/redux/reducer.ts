import { Reducer, combineReducers } from 'redux';
import { CsState } from '@client/redux/state';

type CsReducer = Reducer<CsState>;
const reducer: CsReducer = combineReducers<CsState>({});

export default reducer;
