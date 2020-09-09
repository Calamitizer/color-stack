import { Reducer } from 'redux';
import { ColorsState, trivialColorsState } from '@client/redux/colors/state';
import { ColorAction, ColorActionType } from '@client/redux/colors/actions';
import {
  requestApiMetadata,
  successApiMetadata,
  failureApiMetadata,
} from '@client/redux/api-metadata';

type ColorsReducer = Reducer<ColorsState, ColorAction>;
const colorsReducer: ColorsReducer = (state = trivialColorsState(), action) => {
  switch (action.type) {
    case ColorActionType.DELETE_ALL: {
      return trivialColorsState();
    }

    case ColorActionType.API_REQUEST: {
      return {
        ...trivialColorsState(),
        apiMetadata: requestApiMetadata(),
      };
    }

    case ColorActionType.API_SUCCESS: {
      const { colors, elapsedMs } = action.payload;

      return {
        ...state,
        data: colors,
        apiMetadata: successApiMetadata(elapsedMs),
      };
    }

    case ColorActionType.API_FAILURE: {
      return {
        ...state,
        apiMetadata: failureApiMetadata(action.payload),
      };
    }

    default: {
      return state;
    }
  }
};

export default colorsReducer;
