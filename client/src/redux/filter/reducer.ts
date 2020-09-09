import { Reducer } from 'redux';
import { FilterState, trivialFilterState } from '@client/redux/filter/state';
import { FilterAction, FilterActionType } from '@client/redux/filter/actions';

type FilterReducer = Reducer<FilterState, FilterAction>;
const filterReducer: FilterReducer = (state = trivialFilterState(), action) => {
  switch (action.type) {
    case FilterActionType.SET_COLOR: {
      return {
        ...state,
        color: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default filterReducer;
