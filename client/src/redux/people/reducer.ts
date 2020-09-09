import { Reducer } from 'redux';
import { PeopleState, trivialPeopleState } from '@client/redux/people/state';
import { PersonAction, PersonActionType } from '@client/redux/people/actions';
import {
  trivialApiMetadata,
  requestApiMetadata,
  successApiMetadata,
  failureApiMetadata,
} from '@client/redux/api-metadata';

type PeopleReducer = Reducer<PeopleState, PersonAction>;
const peopleReducer: PeopleReducer = (state = trivialPeopleState(), action) => {
  switch (action.type) {
    case PersonActionType.INITIAL_FETCH: {
      return {
        ...state,
        doneInitialFetch: true,
      };
    }

    case PersonActionType.DELETE_ALL: {
      return {
        ...state,
        data: [],
        apiMetadata: trivialApiMetadata(),
      };
    }

    case PersonActionType.API_REQUEST: {
      return {
        ...state,
        data: [],
        apiMetadata: requestApiMetadata(),
      };
    }

    case PersonActionType.API_SUCCESS: {
      const { people, elapsedMs } = action.payload;

      return {
        ...state,
        data: people,
        apiMetadata: successApiMetadata(elapsedMs),
      };
    }

    case PersonActionType.API_FAILURE: {
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

export default peopleReducer;
